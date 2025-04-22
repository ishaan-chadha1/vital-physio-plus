'use client'

import { useEffect, useState } from 'react'
import IntroVideo from './IntroVideo'

export default function IntroLayout({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const introSeen = localStorage.getItem('intro_seen')
    if (!introSeen) {
      setShowIntro(true)
    } else {
      setHasMounted(true)
    }
  }, [])

  const handleIntroEnd = () => {
    localStorage.setItem('intro_seen', 'true')
    setShowIntro(false)
    setHasMounted(true)
  }

  if (showIntro) return <IntroVideo onEnd={handleIntroEnd} />
  if (!hasMounted) return null // SSR-safe fallback

  return <>{children}</>
}
