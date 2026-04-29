"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function VideoPlayer({
  src,
  className,
  videoClassName,
}: {
  src: string
  className?: string
  videoClassName?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const [playing,   setPlaying]  = useState(false)
  const [muted,     setMuted]    = useState(true)
  const [progress,  setProgress] = useState(0)

  // Auto-play when 50% visible, pause when out of view
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current
        if (!v) return
        if (entry?.isIntersecting) {
          v.play().catch(() => {})
          setPlaying(true)
        } else {
          v.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  function toggle() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play().catch(() => {}); setPlaying(true) }
    else          { v.pause();                setPlaying(false) }
  }

  function handleTimeUpdate() {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  function seekTo(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration
  }

  return (
    <div ref={containerRef} className={`relative w-full bg-black overflow-hidden group ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted={muted}
        playsInline
        className={`block h-auto w-[calc(100%+6px)] max-w-none translate-x-[-3px] translate-y-[-3px] mb-[-3px] ${videoClassName ?? ""}`}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => { setPlaying(false); setProgress(0) }}
      />

      {/* Mute toggle — top-right, always visible */}
      <button
        onClick={() => {
          const v = videoRef.current
          if (v) v.muted = !muted
          setMuted(m => !m)
        }}
        className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors"
        aria-label={muted ? "Ativar som" : "Silenciar"}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Big play overlay when paused */}
      {!playing && (
        <button
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play"
        >
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
            <Play className="text-white ml-0.5" size={22} />
          </div>
        </button>
      )}

      {/* Progress + play/pause — bottom on hover */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="text-white shrink-0" aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <div
            className="flex-1 h-px bg-white/30 cursor-pointer relative"
            onClick={seekTo}
            role="slider"
            aria-label="Progresso"
          >
            <div className="absolute inset-y-0 left-0 bg-white" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
