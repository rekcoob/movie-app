// app/actors/ActorsClient.tsx
'use client'

import CardList from '../components/CardList'
import { fetchActors } from '../services/api'
import { IActor } from '../types'

interface ActorsClientProps {
  initialData: IActor[]
}

export default function ActorsClient({ initialData }: ActorsClientProps) {
  return (
    <CardList<IActor>
      initialData={initialData}
      fetchFunction={fetchActors}
      getImagePath={(actor) => actor.profile_path}
      getTitle={(actor) => actor.name}
      getLinkPath={(actor) => `/actors/${actor.id}`}
    />
  )
}
