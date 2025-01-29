// src/app/favorites/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import CardItem from '@/app/components/CardItem'
import Spinner from '@/app/components/Spinner'

interface FavoriteMovie {
  id: number
  title: string
  imagePath: string | null
  voteAverage?: number
  releaseDate?: string
  firstAirDate?: string
  type: 'movie' | 'series' | 'actor'
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    // console.log(savedFavorites)
    setFavorites(savedFavorites)
    setLoading(false)
  }, [])

  if (loading) {
    // return <p className='no-favorites'>Loading...</p> // Zobrazenie počas načítavania
    return <Spinner /> // Zobrazenie počas načítavania
  }

  return (
    <>
      {favorites.length > 0 ? (
        <div className='list-container'>
          {favorites.map((fav) => (
            <CardItem
              key={fav.id}
              id={fav.id}
              title={fav.title}
              imagePath={fav.imagePath}
              linkPath={`/${fav.type === 'movie' ? 'movies' : 'series'}/${
                fav.id
              }`}
              voteAverage={fav.voteAverage}
              date={fav.releaseDate || fav.firstAirDate}
            />
          ))}
        </div>
      ) : (
        <div style={{ height: 'calc(100vh - 5.5rem)' }} className='flex center'>
          <p style={{ fontSize: '2rem' }}>No favorites added yet.</p>
        </div>
      )}
    </>
  )
}
