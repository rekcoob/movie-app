// app/movies/upcoming/page.tsx

import React from 'react'
import { fetchUpcomingMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

const UpcomingMovies = async () => {
  const initialData = await fetchUpcomingMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchUpcomingMovies}
    />
  )
}

export default UpcomingMovies
