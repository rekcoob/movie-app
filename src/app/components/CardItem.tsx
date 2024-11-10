// components/CardItem.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const IMG_API = 'https://image.tmdb.org/t/p/w500'
const NO_IMAGE = '/path/to/placeholder.jpg'

interface CardItemProps {
  id: number
  title: string
  imagePath: string | null
  linkPath: string
  subtitle?: string | null
  voteAverage?: number
  date?: string | null
}

const formatVoteAverage = (vote: number): string => `${(vote * 10).toFixed(2)}%`

const formatDate = (dateString: string): string =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
    .format(new Date(dateString))
    .replace(',', '')

const CardItem: React.FC<CardItemProps> = ({
  id,
  title,
  imagePath,
  linkPath,
  voteAverage,
  date,
}) => {
  return (
    <div className='card' key={id}>
      <Link href={linkPath}>
        <div>
          <Image
            src={imagePath ? IMG_API + imagePath : NO_IMAGE}
            alt={title}
            width={224}
            height={336}
            placeholder='blur'
            blurDataURL={NO_IMAGE}
          />
          <h3>{title}</h3>
          <p>
            {voteAverage && formatVoteAverage(voteAverage)}
            {date && <span> | {formatDate(date)}</span>}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default CardItem
