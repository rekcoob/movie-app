// src/app/favorites/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import CardItem from '../../components/CardItem'

interface FavoriteMovie {
  id: number
  title: string
  poster_path: string
  imagePath: string
  vote_average: number
  release_date: string
  overview: string
  // genres?: Genre[]
}

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    console.log(savedFavorites)
    setFavorites(savedFavorites)
  }, [])

  return (
    <div className='list-container'>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <CardItem
            key={fav.id}
            id={fav.id}
            title={fav.title}
            imagePath={fav.imagePath}
            linkPath={`/movies/${fav.id}`}
            voteAverage={fav.vote_average}
            date={fav.release_date}
          />
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  )
}

export default FavoritesPage
