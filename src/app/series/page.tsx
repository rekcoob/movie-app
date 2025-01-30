// app/series/page.tsx
import { fetchSeries } from '../services/api'
import SeriesClient from './SeriesClient'

export default async function SeriesListPage() {
  const initialData = await fetchSeries(1)

  return <SeriesClient initialData={initialData.results} />
}
