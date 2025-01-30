// app/movies/popular/page.tsx

import React, { Suspense } from 'react'
import { fetchMovies } from '@/app/services/api'
import MoviesClient from '@/app/movies/MoviesClient'
import Spinner from '@/app/components/Spinner'

export default async function PopularMoviesPage() {
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
