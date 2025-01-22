// app/movies/MoviesClient.tsx
'use client'

import CardList from '../components/CardList'
import { IMG_API } from '../services/constants'
import { Movie } from '../types'

interface MoviesClientProps {
  initialData: Movie[]
  fetchFunction: (page: number) => Promise<{ results: Movie[] }>
}
export default function MoviesClient({
  initialData,
  fetchFunction,
}: MoviesClientProps) {
  return (
    <CardList<Movie>
      initialData={initialData}
      fetchFunction={fetchFunction}
      getImagePath={(movie) => IMG_API + movie.poster_path}
      getTitle={(movie) => movie.title}
      getLinkPath={(movie) => `/movies/${movie.id}`}
      getDate={(movie) => movie.release_date}
    />
  )
}
