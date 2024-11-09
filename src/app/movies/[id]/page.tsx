// app/movies/[id]/page.tsx

import React from 'react'
import DetailsItem from '@/app/components/DetailsItem'
import { fetchMovieById } from '@/app/services/api'

interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  release_date: string
  overview: string
  genres: Genre[]
}

interface Genre {
  id: number
  name: string
}

const MovieItemPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const movie: Movie = await fetchMovieById(Number(id))

  return (
    <DetailsItem
      title={movie.title}
      imagePath={movie.poster_path}
      description={movie.overview}
      subtitle={`${movie.vote_average * 10}% | ${new Intl.DateTimeFormat(
        'en-US',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }
      ).format(new Date(movie.release_date))}`}
      additionalInfo={
        <div className='genres'>
          {movie.genres.map((genre, index) => (
            <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
          ))}
        </div>
      }
    />
  )
}

export default MovieItemPage
