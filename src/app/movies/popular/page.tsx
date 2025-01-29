// app/movies/popular/page.tsx

import React from 'react'
import { fetchMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

export default async function PopularMoviesPage() {
  const initialData = await fetchMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchMovies}
    />
  )
}

// import React from 'react'
// import { fetchMovies } from './services/api'
// import MoviesClient from './movies/MoviesClient'

// const HomePage = async () => {
//   const initialData = await fetchMovies(1)

//   return <MoviesClient initialData={initialData.results} />
// }

// export default HomePage
