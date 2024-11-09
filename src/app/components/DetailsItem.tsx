// components/DetailsItem.tsx

import React from 'react'
import Image from 'next/image'

interface DetailsItemProps {
  title: string
  imagePath: string | null
  description: string
  subtitle?: string
  additionalInfo?: React.ReactNode // For genres or custom info
}

const IMG_API = 'https://image.tmdb.org/t/p/w500'
const NO_IMAGE = '/path/to/placeholder.jpg'

const DetailsItem: React.FC<DetailsItemProps> = ({
  title,
  imagePath,
  description,
  subtitle,
  additionalInfo,
}) => {
  return (
    <div className='details'>
      <Image
        src={imagePath ? IMG_API + imagePath : NO_IMAGE}
        alt={title}
        width={500}
        height={750}
        placeholder='blur'
        blurDataURL={NO_IMAGE}
      />
      <div className='desc'>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        {additionalInfo && (
          <div className='additional-info'>{additionalInfo}</div>
        )}
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DetailsItem
