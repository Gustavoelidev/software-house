'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CarouselProps {
  images: { src: string; alt: string }[]
  interval?: number // ms between slides, default 3000
  aspectRatio?: 'landscape' | 'mobile'
}

export function Carousel({ images, interval = 3000, aspectRatio = 'landscape' }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const isMobile = aspectRatio === 'mobile'

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div
      className={`relative w-full aspect-[1848/886] overflow-hidden ${
        isMobile ? 'bg-neutral-950 flex items-center justify-center' : 'bg-neutral-100'
      }`}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isMobile ? 'flex items-center justify-center p-3 md:p-5' : ''
          }`}
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={isMobile ? 'object-contain p-2 filter drop-shadow-2xl' : 'object-cover'}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
