// app/movies/[id]/page.tsx

import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { IMG_API, NO_IMAGE } from '../../globalVariables'

interface Genre {
  id: number
  name: string
}

interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  release_date: string
  overview: string
  genres: Genre[]
}

interface MoviePageProps {
  params: { id: string }
}

const MovieItemPage: React.FC<MoviePageProps> = async ({ params }) => {
  const { id } = params

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=cc395488b264dfc1bbd362c3c7ade664&language=en-US`
  )

  if (!response.ok) {
    notFound() // Redirects to 404 if movie not found
  }

  const movie: Movie = await response.json()

  const { title, poster_path, vote_average, release_date, overview, genres } =
    movie

  return (
    <div className='details'>
      <Image
        src={poster_path ? IMG_API + poster_path : NO_IMAGE}
        alt={title}
        width={500}
        height={750}
        placeholder='blur'
        blurDataURL='/path/to/placeholder.jpg'
      />
      <div className='desc'>
        <h2>{title}</h2>
        <p>
          <span>{vote_average * 10}% | </span>
          <span>
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(release_date))}
          </span>
        </p>
        <div className='genres'>
          {genres &&
            genres.map((genre, index) => (
              <span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>
            ))}
        </div>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieItemPage
