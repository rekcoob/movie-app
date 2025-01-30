// app/movies/upcoming/page.tsx

import React from 'react'
import { fetchUpcomingMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

export default async function UpcomingMovies() {
  const initialData = await fetchUpcomingMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchUpcomingMovies}
    />
  )
}
