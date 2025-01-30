// app/actors/ActorsClient.tsx
'use client'

import CardList from '../components/CardList'
import { fetchSeries } from '../services/api'
import { ISeries } from '../types'

interface SeriesClientProps {
  initialData: ISeries[]
}

export default function ActorsClient({ initialData }: SeriesClientProps) {
  return (
    <CardList<ISeries>
      initialData={initialData}
      fetchFunction={fetchSeries}
      getImagePath={(series) => series.poster_path}
      getTitle={(series) => series.name}
      getLinkPath={(series) => `/series/${series.id}`}
      getDate={(series) => series.first_air_date}
    />
  )
}
