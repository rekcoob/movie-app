// components/CardItem.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMG_API, NO_IMAGE } from '@/app/services/constants'
import { formatVoteAverage, formatDate } from '@/app/services/utils'

interface CardItemProps {
  id: number
  title: string
  imagePath: string | null
  linkPath: string
  subtitle?: string | null
  voteAverage?: number
  date?: string | null
}

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
            placeholder='empty'
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
