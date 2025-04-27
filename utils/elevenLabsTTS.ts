export async function speakWithElevenLabs(text: string) {
    if (typeof window === 'undefined') return; // Only run client-side
  
    const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY; // Load your API Key
    const voiceId = "JBFqnCBsd6RMkjVDRZzb"; // Example voiceId (replace with yours)
  
    if (!apiKey) {
      console.error('No ElevenLabs API key found');
      return;
    }
  
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
      }),
    });
  
    if (!response.ok) {
      console.error('Failed to fetch speech from ElevenLabs');
      return;
    }
  
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
  
    const audio = new Audio(audioUrl);
    audio.play();
  }
  