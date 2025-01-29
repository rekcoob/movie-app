// app/movies/popular/page.tsx

import React from 'react'
import { fetchMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

export default async function PopularMoviesPage() {
  const initialData = await fetchMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchMovies}
    />
  )
}
