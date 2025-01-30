// app/actors/page.tsx

import React, { Suspense } from 'react'
import { fetchActors } from '../services/api'
import ActorsClient from './ActorsClient'
import Spinner from '@/app/components/Spinner'

export default async function ActorListPage() {
  const initialData = await fetchActors(1)

  return (
    <Suspense fallback={<Spinner />}>
      <ActorsClient initialData={initialData.results} />
    </Suspense>
  )
}
