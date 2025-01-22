// components/DetailsItem.tsx

import React from 'react'
import Image from 'next/image'
import ToggleFavorite from './ToggleFavorite'
import { formatVoteAverage, formatDate } from '@/app/services/utils'
import { IMG_API, NO_IMAGE } from '@/app/services/constants'
import { ContentDetails, MovieDetails, SeriesDetails } from '@/app/types'

interface DetailsItemProps {
  item: ContentDetails
}

const DetailsView: React.FC<DetailsItemProps> = ({ item }) => {
  const getTitle = (item: ContentDetails) => {
    if (item.type === 'actor') {
      return item.name
    }
    return item.title
  }

  const shouldShowFavorite = (
    item: ContentDetails
  ): item is MovieDetails | SeriesDetails => {
    return item.type === 'movie' || item.type === 'series'
  }

  return (
    <div className='details'>
      <Image
        src={item.imagePath ? IMG_API + item.imagePath : NO_IMAGE}
        alt={getTitle(item)}
        width={500}
        height={750}
        placeholder='blur'
        blurDataURL={NO_IMAGE}
      />
      <div className='desc'>
        <h2>{getTitle(item)}</h2>

        {shouldShowFavorite(item) && <ToggleFavorite item={item} />}

        {item.additionalInfo && (
          <div className='additional-info'>{item.additionalInfo}</div>
        )}

        {shouldShowFavorite(item) && (
          <p>
            {formatVoteAverage(item.voteAverage)}
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
  )
}

export default DetailsView
