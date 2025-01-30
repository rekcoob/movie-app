import React from 'react'
import DetailsView from '@/app/components/DetailsView'
import { fetchActorById } from '@/app/services/api'
import { formatDate } from '@/app/services/utils'
import { IActor, IActorDetails } from '@/app/types'

export default async function ActorDetails({ id }: { id: string }) {
  const actor: IActor = await fetchActorById(Number(id))

  const actorDetails: IActorDetails = {
    type: 'actor',
    id: actor.id,
    name: actor.name,
    imagePath: actor.profile_path,
    description: actor.biography,
    birthday: actor.birthday,
    placeOfBirth: actor.place_of_birth,
    additionalInfo: actor.birthday && (
      <span>
        {formatDate(actor.birthday)} |{' '}
        {actor.place_of_birth && <span>{actor.place_of_birth}</span>}
      </span>
    ),
  }

  return <DetailsView item={actorDetails} />
}
