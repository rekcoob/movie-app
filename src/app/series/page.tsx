// app/series/page.tsx
import { fetchSeries } from '../services/api'
import SeriesClient from './SeriesClient'

const SeriesListPage = async () => {
  const initialData = await fetchSeries(1)

  return <SeriesClient initialData={initialData.results} />
}

export default SeriesListPage
