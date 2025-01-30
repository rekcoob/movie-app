// app/page.tsx

import React, { Suspense } from 'react'
import { fetchMovies } from './services/api'
import MoviesClient from './movies/MoviesClient'
import Spinner from '@/app/components/Spinner'

export default async function HomePage() {
  const initialData = await fetchMovies(1)

  return (
    <Suspense fallback={<Spinner />}>
      <MoviesClient
        initialData={initialData.results}
        fetchFunction={fetchMovies}
      />
    </Suspense>
  )
}
