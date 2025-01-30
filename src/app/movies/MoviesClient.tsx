// app/movies/MoviesClient.tsx
'use client'

import React, { Suspense } from 'react'
import CardList from '../components/CardList'
import { IMovie } from '../types'
import Spinner from '../components/Spinner'

interface MoviesClientProps {
  initialData: IMovie[]
  fetchFunction: (page: number) => Promise<{ results: IMovie[] }>
}
export default function MoviesClient({
  initialData,
  fetchFunction,
}: MoviesClientProps) {
  return (
    <Suspense fallback={<Spinner />}>
      <CardList<IMovie>
        initialData={initialData}
        fetchFunction={fetchFunction}
        getImagePath={(movie) => movie.poster_path}
        getTitle={(movie) => movie.title}
        getLinkPath={(movie) => `/movies/${movie.id}`}
        getDate={(movie) => movie.release_date}
      />
    </Suspense>
  )
}
