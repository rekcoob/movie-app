// app/movies/top-rated/page.tsx

import React from 'react'
import { fetchTopRatedMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

const TopRatedMovies = async () => {
  const initialData = await fetchTopRatedMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchTopRatedMovies}
    />
  )
}

export default TopRatedMovies
