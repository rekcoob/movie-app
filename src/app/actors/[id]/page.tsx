// app/actor/[id]/page.tsx

import React from 'react'
import DetailsItem from '../../components/DetailsItem'
import { fetchActorById } from '@/app/services/api'

interface Actor {
  id: number
  name: string
  profile_path: string | null
  birthday: string | null
  place_of_birth: string | null
  biography: string
}

interface ActorPageProps {
  params: { id: string }
}

const ActorItem: React.FC<ActorPageProps> = async ({ params }) => {
  const { id } = params

  const actor: Actor = await fetchActorById(Number(id))
  const { name, profile_path, birthday, place_of_birth, biography } = actor

  return (
    <DetailsItem
      title={name}
      imagePath={profile_path}
      description={biography}
      additionalInfo={
        birthday && (
          <span>
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(birthday))}{' '}
            | {<span>{place_of_birth}</span>}
          </span>
        )
      }
    />
  )
}

export default ActorItem
