// app/movies/popular/page.tsx

import { fetchMovies } from '@/app/services/api'
import MoviesClient from '@/app/movies/MoviesClient'

export default async function PopularMoviesPage() {
  const initialData = await fetchMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchMovies}
    />
  )
}
