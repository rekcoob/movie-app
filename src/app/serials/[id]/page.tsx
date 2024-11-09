import React from 'react'
import DetailsItem from '@/app//components/DetailsItem'
import { fetchSeriesById } from '@/app/services/api'

interface Genre {
  id: number
  name: string
}

interface Series {
  id: number
  name: string
  poster_path: string | null
  vote_average: number
  first_air_date: string
  overview: string
  genres: Genre[]
}

/* SeriesDetails */
const SeriesDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const series: Series = await fetchSeriesById(Number(id))

  return (
    <DetailsItem
      title={series.name}
      imagePath={series.poster_path}
      description={series.overview}
      subtitle={`${series.vote_average * 10}% | ${new Intl.DateTimeFormat(
        'en-US',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }
      ).format(new Date(series.first_air_date))}`}
      additionalInfo={
        <div className='genres'>
          {series.genres.map((genre, index) => (
            <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
          ))}
        </div>
      }
    />
  )
}

export default SeriesDetails
