// app/serialList/page.tsx
import React from 'react'
import { fetchSeries, IMG_API } from '../services/api'
import { Series } from '../types'
import CardItem from '../components/CardItem'

const SerialListPage = async () => {
  const data = await fetchSeries()
  const seriesList: Series[] = data.results

  return (
    <div className='list-container'>
      {seriesList.map((series) => (
        <CardItem
          key={series.id}
          id={series.id}
          title={series.name}
          imagePath={IMG_API + series.poster_path}
          linkPath={`/serials/${series.id}`}
          subtitle={`${series.vote_average * 10}% | ${new Intl.DateTimeFormat(
            'en-US',
            {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }
          ).format(new Date(series.first_air_date))}`}
        />
      ))}
    </div>
  )
}

export default SerialListPage
