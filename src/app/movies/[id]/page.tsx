import React, { Suspense } from 'react'
import MovieDetails from '@/app/movies/MovieDetails'
import Spinner from '@/app/components/Spinner' // Loading komponent

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <Suspense fallback={<Spinner />}>
      <MovieDetails id={id} />
    </Suspense>
  )
}
