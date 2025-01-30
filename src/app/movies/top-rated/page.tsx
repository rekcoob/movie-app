// app/movies/top-rated/page.tsx

import React, { Suspense } from 'react'
import { fetchTopRatedMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'
import Spinner from '@/app/components/Spinner'

export default async function NowPlayingMovies() {
  const initialData = await fetchTopRatedMovies(1)

  return (
    <Suspense fallback={<Spinner />}>
      <MoviesClient
        initialData={initialData.results}
        fetchFunction={fetchTopRatedMovies}
      />
    </Suspense>
  )
}
