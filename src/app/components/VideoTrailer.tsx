// components/VideoTrailer.tsx
import React from 'react'
import { IVideoResult } from '@/app/types'

interface VideoTrailerProps {
  videos?: IVideoResult[]
}

export default function VideoTrailer({ videos }: VideoTrailerProps) {
  const trailer = videos?.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  )

  if (!trailer) return null

  return (
    <div className='video-trailer'>
      <h3>Trailer 🍿</h3>
      <div className='video-wrapper'>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-lg'
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </div>
  )
}
