import React from 'react'
import DetailsView from '@/app//components/DetailsView'
import { fetchSeriesById } from '@/app/services/api'
import { Series, SeriesDetails } from '@/app/types'

const SeriesDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const series: Series = await fetchSeriesById(Number(id))

  const seriesDetails: SeriesDetails = {
    type: 'series',
    id: series.id,
    title: series.name,
    imagePath: series.poster_path,
    description: series.overview,
    voteAverage: series.vote_average,
    firstAirDate: series.first_air_date,
    additionalInfo: (
      <div className='genres'>
        {series.genres &&
          series.genres.map((genre, index) => (
            <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
          ))}
      </div>
    ),
    videos: series.videos?.results,
  }

  return <DetailsView item={seriesDetails} />
}

export default SeriesDetailsPage
