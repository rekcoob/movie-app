import React, { Suspense } from 'react'
import ActorDetails from '@/app/actors/ActorDetails'
import Spinner from '@/app/components/Spinner'

export default async function ActorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <Suspense fallback={<Spinner />}>
      <ActorDetails id={id} />
    </Suspense>
  )
}
