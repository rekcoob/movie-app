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
          subtitle={
            actor.birthday
              ? new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }).format(new Date(actor.birthday))
              : 'Unknown'
          }
          // subtitle={
          //   actor.birthday && (
          //     <span>
          //       {new Intl.DateTimeFormat('en-US', {
          //         month: 'long',
          //         day: 'numeric',
          //         year: 'numeric',
          //       }).format(new Date(actor.birthday))}{' '}
          //       | {<span>{actor.place_of_birth}</span>}
          //     </span>
          //   )
          // }

          // subtitle={
          //   // actor.birthday
          //   //   ? new Intl.DateTimeFormat('en-US', {
          //   //       month: 'short',
          //   //       day: 'numeric',
          //   //       year: 'numeric',
          //   //     }).format(new Date(actor.birthday))
          //   //   : 'Unknown'
          //   'test'
          // }
        />
      ))}
    </div>
  )
}

export default ActorListPage
