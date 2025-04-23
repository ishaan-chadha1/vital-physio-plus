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
    return () => window.removeEventListener("message", listener)
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

      {/* YouTube Video */}
      <iframe
        ref={iframeRef}
        className="w-full h-full"
        src="https://www.youtube.com/embed/CF_1py1maEQ?autoplay=1&controls=0&modestbranding=1&rel=0&enablejsapi=1"
        allow="autoplay"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  )
}
