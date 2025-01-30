import React from 'react'
import DetailsView from '@/app/components/DetailsView'
import { fetchSeriesById } from '@/app/services/api'
import { ISeries, ISeriesDetails } from '@/app/types'

export default async function SeriesDetails({ id }: { id: string }) {
  const series: ISeries = await fetchSeriesById(Number(id))

  const seriesDetails: ISeriesDetails = {
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
