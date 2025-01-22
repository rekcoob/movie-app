// app/actors/page.tsx
import { fetchSeries } from '../services/api'
import SerialsClient from './SerialsClient'

// export default async function ActorsPage() {
//   const initialData = await fetchActors(1)
//   return <ActorsClient initialData={initialData.results} />
// }

const SerialsListPage = async () => {
  const initialData = await fetchSeries(1)

  return <SerialsClient initialData={initialData.results} />
}

export default SerialsListPage
