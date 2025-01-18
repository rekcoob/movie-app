import React from 'react'
import DetailsItem from '@/app/components/DetailsItem'
import { fetchActorById } from '@/app/services/api'

interface Actor {
  id: number
  name: string
  profile_path: string | null
  birthday: string | null
  place_of_birth: string | null
  biography: string
}
// interface Params {
//   id: string
// }

const ActorItem = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  const actor: Actor = await fetchActorById(Number(id)) // Convert id to number
  const { name, profile_path, birthday, place_of_birth, biography } = actor

  return (
    <DetailsItem
      id={actor.id}
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
            | {place_of_birth && <span>{place_of_birth}</span>}
          </span>
        )
      }
    />
  )
}

export default ActorItem
