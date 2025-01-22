// app/page.tsx

import React from 'react'
import { fetchMovies } from './services/api'
import MoviesClient from './movies/MoviesClient'

const HomePage = async () => {
  const initialData = await fetchMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchMovies}
    />
  )
}

export default HomePage
