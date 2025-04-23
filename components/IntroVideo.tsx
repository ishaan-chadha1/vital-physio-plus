'use client'

import { useEffect, useRef } from 'react'

export default function IntroVideo({ onEnd }: { onEnd: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return

      try {
        const data = JSON.parse(event.data)
        if (data.event === "onStateChange" && data.info === 0) {
          onEnd()
        }
      } catch {}
    }

    window.addEventListener("message", listener)

    // Attempt to start playback via postMessage
    const tryPlay = () => {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'mute', // Must mute to guarantee autoplay on most browsers
            args: [],
          }),
          '*'
        )
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'playVideo',
            args: [],
          }),
          '*'
        )
      }
    }

    // Give it a short delay to load before triggering
    const timeout = setTimeout(tryPlay, 500)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("message", listener)
    }
  }, [onEnd])

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Skip Button */}
      <button
        onClick={onEnd}
        className="absolute top-6 right-6 text-white bg-black/70 px-4 py-2 rounded-md hover:bg-black/90 transition"
      >
        Skip
      </button>

      {/* YouTube Embed */}
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src="https://www.youtube.com/embed/CF_1py1maEQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1"
        allow="autoplay; fullscreen"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  )
}
