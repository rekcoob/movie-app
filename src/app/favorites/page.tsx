// src/app/favorites/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { Movie } from '../types'
import CardItem from '../components/CardItem'

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(savedFavorites)
  }, [])

  return (
    <div className='list-container'>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <CardItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imagePath={movie.poster_path}
            linkPath={`/movies/${movie.id}`}
            subtitle={`${movie.vote_average * 10}% | ${new Intl.DateTimeFormat(
              'en-US',
              {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }
            ).format(new Date(movie.release_date))}`}
          />
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  )
}

export default FavoritesPage
