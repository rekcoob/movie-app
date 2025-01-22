// app/movies/[id]/page.tsx

import React from 'react'
import DetailsItem from '@/app/components/DetailsItem'
import { fetchMovieById } from '@/app/services/api'
import { Movie } from '@/app/types'

const MovieItemPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const movie: Movie = await fetchMovieById(Number(id))

  return (
    <DetailsItem
      id={movie.id}
      title={movie.title}
      imagePath={movie.poster_path}
      description={movie.overview}
      voteAverage={movie.vote_average}
      date={movie.release_date}
      additionalInfo={
        <div className='genres'>
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
            ))}
        </div>
      }
    />
  )
}

export default MovieItemPage
