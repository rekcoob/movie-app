// app/series/page.tsx

import React, { Suspense } from 'react'
import { fetchSeries } from '@/app/services/api'
import SeriesClient from './SeriesClient'
import Spinner from '@/app/components/Spinner'

export default async function SeriesListPage() {
  const initialData = await fetchSeries(1)

  return (
    <Suspense fallback={<Spinner />}>
      <SeriesClient initialData={initialData.results} />
    </Suspense>
  )
}
