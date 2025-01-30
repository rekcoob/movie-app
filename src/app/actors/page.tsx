// app/actors/page.tsx
import { fetchActors } from '../services/api'
import ActorsClient from './ActorsClient'

export default async function ActorListPage() {
  const initialData = await fetchActors(1)
  return <ActorsClient initialData={initialData.results} />
}
