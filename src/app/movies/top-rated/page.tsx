// app/movies/top-rated/page.tsx

import { fetchTopRatedMovies } from '../../services/api'
import MoviesClient from '../MoviesClient'

export default async function NowPlayingMovies() {
  const initialData = await fetchTopRatedMovies(1)

  return (
    <MoviesClient
      initialData={initialData.results}
      fetchFunction={fetchTopRatedMovies}
    />
  )
}
