import React from 'react'
import DetailsView from '@/app//components/DetailsView'
import { fetchSeriesById } from '@/app/services/api'
import { Serial } from '@/app/types'

/* SeriesDetails */
const SeriesDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const series: Serial = await fetchSeriesById(Number(id))

  return (
    <DetailsView
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
      type='series'
    />
  )
}

export default SeriesDetails
