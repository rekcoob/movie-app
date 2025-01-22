// app/actors/page.tsx
import { fetchActors } from '../services/api'
import ActorsClient from './ActorsClient'

// export default async function ActorsPage() {
//   const initialData = await fetchActors(1)
//   return <ActorsClient initialData={initialData.results} />
// }

const ActorListPage = async () => {
  const initialData = await fetchActors(1)
  return <ActorsClient initialData={initialData.results} />
}

export default ActorListPage

// import React from 'react'
// import { fetchActors } from '../services/api'
// import { Actor } from '../types'
// import CardItem from '../components/CardItem'

// const ActorListPage = async () => {
//   const data = await fetchActors()
//   const actors: Actor[] = data.results

//   return (
//     <div className='list-container'>
//       {actors.map((actor) => (
//         <CardItem
//           key={actor.id}
//           id={actor.id}
//           title={actor.name}
//           imagePath={actor.profile_path}
//           linkPath={`/actors/${actor.id}`}
//         />
//       ))}
//     </div>
//   )
// }

// export default ActorListPage
