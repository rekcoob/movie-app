// app/movies/now-playing/page.tsx

import React from 'react'
import { fetchNowPlayingMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

export default async function NowPlayingMovies() {
  const initialData = await fetchNowPlayingMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchNowPlayingMovies}
    />
  )
}
