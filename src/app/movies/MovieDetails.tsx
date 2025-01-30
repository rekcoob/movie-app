// app/movies/MovieDetails.tsx

import React from 'react'
import DetailsView from '@/app/components/DetailsView'
import { fetchMovieById } from '@/app/services/api'
import { IMovie, IMovieDetails } from '@/app/types'

export default async function MovieDetails({ id }: { id: string }) {
  // const { id } = await params
  const movie: IMovie = await fetchMovieById(Number(id))

  const movieDetails: IMovieDetails = {
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
