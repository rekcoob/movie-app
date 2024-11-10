// components/DetailsItem.tsx

import React from 'react'
import Image from 'next/image'
import ToggleFavorite from './ToggleFavorite'
import { formatVoteAverage, formatDate } from '../services/utils'

interface DetailsItemProps {
  id: number
  title: string
  imagePath: string | null
  description: string
  subtitle?: string
  additionalInfo?: React.ReactNode // For genres or custom info
  voteAverage?: number
  date?: string | null
}

const IMG_API = 'https://image.tmdb.org/t/p/w500'
const NO_IMAGE = '/path/to/placeholder.jpg'

const DetailsItem: React.FC<DetailsItemProps> = (props) => {
  const movie = {
    id: props.id,
    title: props.title,
    imagePath: props.imagePath,
    description: props.description,
    subtitle: props.subtitle,
    additionalInfo: props.additionalInfo,
  }

  return (
    <div className='details'>
      <Image
        src={props.imagePath ? IMG_API + props.imagePath : NO_IMAGE}
        alt={props.title}
        width={500}
        height={750}
        placeholder='blur'
        blurDataURL={NO_IMAGE}
      />
      <div className='desc'>
        <h2>{props.title}</h2>
        <ToggleFavorite movie={movie} />

        {/* {props.subtitle && <p>{props.subtitle}</p>} */}

        {/* Display voteAverage and date if available */}
        {(props.voteAverage || props.date) && (
          <p>
            {props.voteAverage && formatVoteAverage(props.voteAverage)}
            {props.date && <span> | {formatDate(props.date)}</span>}
          </p>
        )}

        {props.additionalInfo && (
          <div className='additional-info'>{props.additionalInfo}</div>
        )}
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default DetailsItem
