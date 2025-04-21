'use client';

export default function VoiceAgentEmbed() {
  return (
    <div className="w-full h-screen relative z-50">
      <iframe
        src="https://vpp-pulse.vercel.app/c/993.15524_0.8451326718884205" // Replace with dynamic slug if needed
        className="w-full h-full border-none"
        allow="microphone"
        style={{ background: 'transparent' }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        title="ElevenLabs Voice Agent"
      ></iframe>
    </div>
  );
}
