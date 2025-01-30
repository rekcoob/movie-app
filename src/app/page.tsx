// app/page.tsx

import React from 'react'
import { fetchMovies } from './services/api'
import MoviesClient from './movies/MoviesClient'

export default async function HomePage() {
  const initialData = await fetchMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchMovies}
    />
  )
}
