// app/actors/page.tsx

import React from 'react'
import { fetchActors } from '../services/api'
import { Actor } from '../types'
import CardItem from '../components/CardItem'

const ActorListPage = async () => {
  const data = await fetchActors()
  const actors: Actor[] = data.results

  return (
    <div className='list-container'>
      {actors.map((actor) => (
        <CardItem
          key={actor.id}
          id={actor.id}
          title={actor.name}
          imagePath={actor.profile_path}
          linkPath={`/actors/${actor.id}`}
        />
      ))}
    </div>
  )
}

export default ActorListPage
