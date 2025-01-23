// app/movies/[id]/page.tsx

import React from 'react'
import DetailsView from '@/app/components/DetailsView'
import { fetchMovieById } from '@/app/services/api'
import { Movie, MovieDetails } from '@/app/types'

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const movie: Movie = await fetchMovieById(Number(id))

  const movieDetails: MovieDetails = {
    type: 'movie',
    id: movie.id,
    title: movie.title,
    imagePath: movie.poster_path,
    description: movie.overview,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
    videos: movie.videos?.results,
    additionalInfo: (
      <div className='genres'>
        {movie.genres &&
          movie.genres.map((genre, index) => (
            <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
          ))}
      </div>
    ),
  }

  return <DetailsView item={movieDetails} />
}

export default MovieDetailsPage
