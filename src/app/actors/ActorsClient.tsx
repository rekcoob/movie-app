// app/actors/ActorsClient.tsx
'use client'

import CardList from '../components/CardList'
import { fetchActors } from '../services/api'
import { IMG_API } from '../services/constants'
import { Actor } from '../types'

interface ActorsClientProps {
  initialData: Actor[]
}

export default function ActorsClient({ initialData }: ActorsClientProps) {
  return (
    <CardList<Actor>
      initialData={initialData}
      fetchFunction={fetchActors}
      getImagePath={(actor) => IMG_API + actor.profile_path}
      getTitle={(actor) => actor.name}
      getLinkPath={(actor) => `/actors/${actor.id}`}
    />
  )
}
