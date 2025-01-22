// app/actors/ActorsClient.tsx
'use client'

import CardList from '../components/CardList'
import { fetchSeries } from '../services/api'
import { IMG_API } from '../services/constants'
import { Serial } from '../types'

interface SerialslientProps {
  initialData: Serial[]
}

export default function ActorsClient({ initialData }: SerialslientProps) {
  return (
    <CardList<Serial>
      initialData={initialData}
      fetchFunction={fetchSeries}
      getImagePath={(serial) => IMG_API + serial.poster_path}
      getTitle={(serial) => serial.name}
      getLinkPath={(serial) => `/serials/${serial.id}`}
    />
  )
}
