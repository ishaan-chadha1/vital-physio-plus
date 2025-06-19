require('dotenv').config(); // For loading environment variables
const WebSocket = require('ws');
const http = require('http');
// Removed: const { execSync } = require('child_process'); // No longer needed for SoX check

// --- Environment Variables & Configuration ---
const ELEVENLABS_AGENT_ID = process.env.ELEVENLABS_AGENT_ID;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

// --- Exotel's Expected Audio Format (from your previous logs) ---
// This is crucial. Exotel seems to expect ulaw_8000.
// Eleven Labs Conversational AI should be configured to output this or we convert.
const EXOTEL_EXPECTED_SAMPLE_RATE = 8000;
// Note: EXOTEL_EXPECTED_AUDIO_ENCODING is conceptual, as ElevenLabs now directly matches
// We are expecting Base64 encoded raw u-law audio at 8kHz from Exotel and to ElevenLabs.

// --- Initial Environment Variable Checks & Logging ---
console.log('--- Environment Variable Status ---');
console.log('ELEVENLABS_AGENT_ID:', ELEVENLABS_AGENT_ID ? 'Loaded' : 'MISSING');
console.log('ELEVENLABS_API_KEY:', ELEVENLABS_API_KEY ? 'Loaded (first 5 chars: ' + ELEVENLABS_API_KEY.substring(0, 5) + '...)' : 'MISSING');
console.log('-----------------------------------');

if (!ELEVENLABS_AGENT_ID) {
    console.error("Missing ELEVENLABS_AGENT_ID in environment variables. Please check your .env file.");
    process.exit(1);
}
if (!ELEVENLABS_API_KEY) {
    console.warn("WARNING: ELEVENLABS_API_KEY is missing in environment variables. This might prevent Eleven Labs Conversational AI from generating audio.");
}

// Eleven Labs Conversational AI WebSocket URL
const ELEVEN_LABS_CONVAI_WS_URL = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${ELEVENLABS_AGENT_ID}`;

// Exotel Voicebot configuration
const EXOTEL_WS_PORT = process.env.EXOTEL_WS_PORT || 8080;

// Removed: Audio conversion helper functions (convertPcmToUlaw and SoX check)

// --- WebSocket Server for Exotel ---
const server = http.createServer((req, res) => {
    res.writeHead(404);
    res.end('Not Found');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    console.log('\n--- New WebSocket Connection from Exotel established! ---');

    let elevenLabsWs = null;
    let exotelStreamSid = null; // Store Exotel stream SID for media messages
    let audioBufferQueue = []; // Buffer for incoming audio from Exotel
    let elevenLabsReady = false; // Flag to indicate Eleven Labs WS is open

    // --- Connect to Eleven Labs Conversational AI ---
    const connectToElevenLabs = () => {
        if (elevenLabsWs && elevenLabsWs.readyState === WebSocket.OPEN) {
            console.log("[II] Eleven Labs Conversational AI WebSocket already open, skipping reconnection.");
            return;
        }

        console.log('[II] Attempting to connect to Eleven Labs Conversational AI WebSocket...');
        elevenLabsWs = new WebSocket(ELEVEN_LABS_CONVAI_WS_URL);

        elevenLabsWs.onopen = () => {
            console.log('[II] Connected to Conversational AI.');
            elevenLabsReady = true; // Set flag to true

            // Send initial configuration message as per Eleven Labs Conversational AI docs
            // IMPORTANT: sample_rate and hd_audio match the agent's μ-law 8000 Hz configuration.
            elevenLabsWs.send(JSON.stringify({
                "api_key": ELEVENLABS_API_KEY,
                "text_input": "", // Initial empty text input to start listening
                "voice_id": "P7vsEyTOpZ6YUTulin8m", // Use your preferred voice ID or remove if agent defines.
                "sample_rate": EXOTEL_EXPECTED_SAMPLE_RATE, // Match Exotel's sample rate and ElevenLabs agent config
                "optimize_streaming_latency": 4, // Maximize latency optimization (0 to 4)
                "enable_per_utterance_interruption": true, // Allow interruption
                "flush_tools": false,
                "hd_audio": false // False for 8kHz
            }));
            console.log('[II] Sent initial ElevenLabs config (API Key, sample_rate, voice_id).');

            // Now that ElevenLabs is open, send any buffered audio
            console.log(`[II] ElevenLabs connected. Sending ${audioBufferQueue.length} buffered audio chunks.`);
            while (audioBufferQueue.length > 0) {
                const bufferedAudio = audioBufferQueue.shift();
                if (elevenLabsWs.readyState === WebSocket.OPEN) {
                    elevenLabsWs.send(JSON.stringify({ "user_audio_chunk": bufferedAudio }));
                } else {
                    console.warn('[II] ElevenLabs WebSocket closed while sending buffered audio. Dropping remaining chunks.');
                    break;
                }
            }
        };

        elevenLabsWs.onmessage = async (message) => {
            try {
                const data = JSON.parse(message.data);
                // console.log('[II] ElevenLabs Message Received (Parsed):', JSON.stringify(data, null, 2)); // Enable for verbose debugging

                switch (data.type) {
                    case "conversation_initiation_metadata":
                        console.info("[II] Received conversation initiation metadata:", data.metadata);
                        break;
                    case "audio":
                        if (data.audio_event?.audio_base_64) {
                            const base64Audio = data.audio_event.audio_base_64;
                            // No conversion needed as ElevenLabs is configured for μ-law 8000 Hz output

                            console.log(`[II] Received ElevenLabs audio payload (base64 length: ${base64Audio.length}). Sending to Exotel.`);

                            if (ws.readyState === WebSocket.OPEN && exotelStreamSid) {
                                ws.send(JSON.stringify({
                                    "event": "media",
                                    "stream_sid": exotelStreamSid,
                                    "media": {
                                        "payload": base64Audio,
                                        "chunk": "1", // <--- THE CRITICAL FIX: Changed from number 1 to string "1"
                                        "timestamp": Date.now().toString()
                                    }
                                }));
                            } else {
                                console.warn('[Exotel->ElevenLabs] Exotel WebSocket not open or stream SID missing. Could not send ElevenLabs audio.');
                            }
                        } else {
                            console.warn("[II] Audio event received from ElevenLabs, but 'audio_base_64' payload is missing or empty.");
                        }
                        break;
                    case "interruption":
                        console.log("[II] Received interruption signal from ElevenLabs (agent is interrupting).");
                        break;
                    case "ping":
                        if (data.ping_event?.event_id) {
                            const pongResponse = { type: "pong", event_id: data.ping_event.event_id };
                            elevenLabsWs.send(JSON.stringify(pongResponse));
                        }
                        break;
                    case "transcription":
                        if (data.transcription_event?.transcript) {
                            console.log('[II] ElevenLabs Transcript:', data.transcription_event.transcript);
                        }
                        break;
                    case "status":
                        if (data.status_event?.message) {
                            console.log('[II] ElevenLabs Status:', data.status_event.message);
                        }
                        break;
                    case "agent_response":
                        if (data.agent_response_event?.agent_response) {
                            console.log(`[II] ElevenLabs Agent Text Response: "${data.agent_response_event.agent_response}"`);
                        }
                        break;
                    case "error":
                        console.error('[II] ElevenLabs API Error:', data.error);
                        break;
                    default:
                        console.log('[II] Unhandled ElevenLabs message type:', data.type, data);
                }
            } catch (error) {
                console.error("[II] Error parsing ElevenLabs message or processing it:", error, message.data);
            }
        };

        elevenLabsWs.onclose = (event) => {
            console.log(`[II] Eleven Labs Conversational AI WebSocket closed: Code=${event.code}, Reason=${event.reason}.`);
            elevenLabsReady = false; // Reset flag
            if (ws.readyState === WebSocket.OPEN) {
                ws.close(1001, 'ElevenLabs disconnected unexpectedly');
            }
        };

        elevenLabsWs.onerror = (error) => {
            console.error('[II] Eleven Labs Conversational AI WebSocket Error:', error.message);
            elevenLabsReady = false; // Reset flag
            if (ws.readyState === WebSocket.OPEN) {
                ws.close(1001, 'ElevenLabs error encountered');
            }
        };
    };

    connectToElevenLabs(); // Initiate Eleven Labs Conversational AI connection on Exotel connection

    // --- Handle Messages from Exotel ---
    ws.on('message', async (message) => {
        let msg;
        try {
            msg = JSON.parse(message);
        } catch (e) {
            console.error(`[Exotel] Failed to parse message as JSON: ${message.toString().substring(0, 100)}...`);
            return;
        }

        switch (msg.event) {
            case 'connected':
                console.log('[Exotel] Connected Event received:', msg);
                break;
            case 'start':
                console.log('[Exotel] Start Event received:', msg);
                exotelStreamSid = msg.start.stream_sid; // Store stream SID
                console.log(`[Exotel] Audio parameters: Sample Rate=${msg.start.media_format.sample_rate}, Encoding=${msg.start.media_format.encoding}`);

                if (elevenLabsReady) {
                    elevenLabsWs.send(JSON.stringify({ "text_input": "" }));
                    console.log('[II] Sent initial empty text_input to ElevenLabs to trigger agent greeting.');
                } else {
                    console.log('[II] ElevenLabs WebSocket not yet open. Will send initial text_input once connected.');
                }
                break;
            case 'media':
                if (elevenLabsReady) {
                    const audioMessage = { "user_audio_chunk": msg.media.payload }; // Exotel's media.payload is already Base64
                    elevenLabsWs.send(JSON.stringify(audioMessage));
                    // console.log(`[Exotel] Sent media payload of size: ${msg.media.payload.length} to ElevenLabs.`); // Too verbose
                } else {
                    audioBufferQueue.push(msg.media.payload);
                    // console.warn(`[Exotel->ElevenLabs] ElevenLabs WebSocket not open. Buffering incoming media chunk. Queue size: ${audioBufferQueue.length}`); // Too verbose
                }
                break;
            case 'stop':
                console.log('[Exotel] Stop Event received:', msg);
                if (elevenLabsWs && elevenLabsWs.readyState === WebSocket.OPEN) {
                    elevenLabsWs.close(1000, 'Exotel call ended');
                }
                break;
            case 'error':
                console.error('[Exotel] Error Event received:', msg);
                if (elevenLabsWs && elevenLabsWs.readyState === WebSocket.OPEN) {
                    elevenLabsWs.close(1001, 'Exotel error');
                }
                break;
            default:
                console.log('[Exotel] Unknown event:', msg.event, msg);
        }
    });

    // --- Handle Exotel WebSocket Disconnections ---
    ws.on('close', (code, reason) => {
        console.log(`Exotel WebSocket closed: Code=${code}, Reason=${reason}`);
        elevenLabsReady = false; // Reset flag
        audioBufferQueue = []; // Clear any buffered audio
        if (elevenLabsWs && elevenLabsWs.readyState === WebSocket.OPEN) {
            elevenLabsWs.close(1000, 'Exotel connection closed');
        }
    });

    ws.on('error', (error) => {
        console.error('Exotel WebSocket Error:', error.message);
        elevenLabsReady = false; // Reset flag
        audioBufferQueue = []; // Clear any buffered audio
        if (elevenLabsWs && elevenLabsWs.readyState === WebSocket.OPEN) {
            elevenLabsWs.close(1001, 'Exotel connection error');
        }
    });
});

// --- Start the Exotel WebSocket Server ---
server.listen(EXOTEL_WS_PORT, () => {
    console.log(`\nExotel Voicebot WebSocket server listening on port ${EXOTEL_WS_PORT}`);
    console.log('IMPORTANT: Ensure your Exotel Voicebot Applet points to this server\'s WSS/WS URL.');
    console.log('For production, use WSS (HTTPS) with a reverse proxy like Nginx/Caddy and a valid SSL certificate.');
});