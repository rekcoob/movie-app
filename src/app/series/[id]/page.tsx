import React, { Suspense } from 'react'
import SeriesDetails from '@/app/series/SeriesDetails'
import Spinner from '@/app/components/Spinner'

export default async function SeriesDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <Suspense fallback={<Spinner />}>
      <SeriesDetails id={id} />
    </Suspense>
  )
}
