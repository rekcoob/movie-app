// app/page.tsx
'use client'

import React from 'react'
import { fetchMovies, IMG_API } from './services/api'
import { Movie } from './types'
import CardList from './components/CardList'

const HomePage = () => {
  return (
    <CardList<Movie>
      fetchFunction={fetchMovies}
      getImagePath={(movie) => IMG_API + movie.poster_path}
      getTitle={(movie) => movie.title}
      getLinkPath={(movie) => `/movies/${movie.id}`}
      getDate={(movie) => movie.release_date}
    />
  )
}

export default HomePage
