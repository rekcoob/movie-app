import React from 'react'
import DetailsView from '@/app/components/DetailsView'
import { fetchActorById } from '@/app/services/api'
import { Actor, ActorDetails } from '@/app/types'

const ActorDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const actor: Actor = await fetchActorById(Number(id))

  const actorDetails: ActorDetails = {
    type: 'actor',
    id: actor.id,
    name: actor.name,
    imagePath: actor.profile_path,
    description: actor.biography,
    birthday: actor.birthday,
    placeOfBirth: actor.place_of_birth,
    additionalInfo: actor.birthday && (
      <span>
        {new Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(new Date(actor.birthday))}{' '}
        | {actor.place_of_birth && <span>{actor.place_of_birth}</span>}
      </span>
    ),
  }

  return <DetailsView item={actorDetails} />
}

export default ActorDetailsPage
