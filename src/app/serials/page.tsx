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
          voteAverage={series.vote_average}
          date={series.first_air_date}
        />
      ))}
    </div>
  )
}

export default SerialListPage
