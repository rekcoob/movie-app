// app/movies/now-playing/page.tsx

import React from 'react'
import { fetchNowPlayingMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

const NowPlayingMovies = async () => {
  const initialData = await fetchNowPlayingMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchNowPlayingMovies}
    />
  )
}

export default NowPlayingMovies
