// components/DetailsItem.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ToggleFavorite from './ToggleFavorite'
import VideoTrailer from './VideoTrailer'
import { formatVoteAverage, formatDate } from '@/app/services/utils'
import { IMG_API, NO_IMAGE } from '@/app/services/constants'
import { IContentDetails, IMovieDetails, ISeriesDetails } from '@/app/types'
import Spinner from './Spinner'

interface DetailsItemProps {
  item: IContentDetails
}

export default function DetailsView({ item }: DetailsItemProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (item) {
      setLoading(false)
    }
  }, [item])

  const getTitle = (item: IContentDetails) => {
    if (item.type === 'actor') {
      return item.name
    }
    return item.title
  }

  const shouldShowFavorite = (
    item: IContentDetails
  ): item is IMovieDetails | ISeriesDetails => {
    return item.type === 'movie' || item.type === 'series'
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='details-wrapper'>
      <div className='details'>
        <Image
          src={item.imagePath ? IMG_API + item.imagePath : NO_IMAGE}
          alt={getTitle(item)}
          width={420}
          height={600}
          placeholder='empty'
        />
        <div className='desc'>
          <h2>{getTitle(item)}</h2>

          {shouldShowFavorite(item) && <ToggleFavorite item={item} />}

          {item.additionalInfo && (
            <div className='additional-info'>{item.additionalInfo}</div>
          )}

          {shouldShowFavorite(item) && (
            <p>
              <span>{formatVoteAverage(item.voteAverage)}</span>
              {item.type === 'movie' && item.releaseDate && (
                <span> | {formatDate(item.releaseDate)}</span>
              )}
              {item.type === 'series' && item.firstAirDate && (
                <span> | {formatDate(item.firstAirDate)}</span>
              )}
            </p>
          )}

          <p>{item.description}</p>
        </div>
      </div>
      {shouldShowFavorite(item) && <VideoTrailer videos={item.videos} />}
    </div>
  )
}
