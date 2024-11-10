import React from 'react'
import DetailsItem from '@/app//components/DetailsItem'
import { fetchSeriesById } from '@/app/services/api'
import { Series } from '@/app/types'

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
      id={series.id}
      title={series.name}
      imagePath={series.poster_path}
      description={series.overview}
      voteAverage={series.vote_average}
      date={series.first_air_date}
      additionalInfo={
        <div className='genres'>
          {series.genres &&
            series.genres.map((genre, index) => (
              <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
            ))}
        </div>
      }
    />
  )
}

export default SeriesDetails
