// app/page.tsx

import React from 'react'
import { fetchMovies, IMG_API } from './services/api'
import { Movie } from './types'
import CardItem from './components/CardItem'

const HomePage = async () => {
  const data = await fetchMovies()
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
          subtitle={`${movie.vote_average * 10}% | ${new Intl.DateTimeFormat(
            'en-US',
            {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }
          ).format(new Date(movie.release_date))}`}
        />
      ))}
    </div>
  )
}

export default HomePage
