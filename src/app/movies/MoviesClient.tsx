// app/movies/MoviesClient.tsx
'use client'

import CardList from '../components/CardList'
import { IMovie } from '../types'

interface MoviesClientProps {
  initialData: IMovie[]
  fetchFunction: (page: number) => Promise<{ results: IMovie[] }>
}
export default function MoviesClient({
  initialData,
  fetchFunction,
}: MoviesClientProps) {
  return (
    <CardList<IMovie>
      initialData={initialData}
      fetchFunction={fetchFunction}
      getImagePath={(movie) => movie.poster_path}
      getTitle={(movie) => movie.title}
      getLinkPath={(movie) => `/movies/${movie.id}`}
      getDate={(movie) => movie.release_date}
    />
  )
}
