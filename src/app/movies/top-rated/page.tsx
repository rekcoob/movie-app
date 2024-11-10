// app/page.tsx

import React from 'react'
import { fetchTopRatedMovies, IMG_API } from '../../services/api'
import { Movie } from '../../types'
import CardItem from '../../components/CardItem'

const HomePage = async () => {
  const data = await fetchTopRatedMovies()
  const movies: Movie[] = data.results

  return (
    <div className='list-container'>
      {movies.map((movie) => (
        <CardItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imagePath={IMG_API + movie.poster_path}
          linkPath={`/movies/${movie.id}`}
          voteAverage={movie.vote_average}
          date={movie.release_date}
        />
      ))}
    </div>
  )
}

export default HomePage
