// src/components/ToggleFavorite.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { useFavorites } from '@/app/context/FavoritesContext'
import { HeartFilled } from '@/app/components/icons/HeartFilled'
import { HeartOutline } from '@/app/components/icons/HeartOutline'

interface Item {
  id: number
  title: string
  imagePath: string | null
  additionalInfo?: React.ReactNode
  type: 'movie' | 'series' | 'actor'
  voteAverage?: number
  releaseDate?: string
  firstAirDate?: string
}

interface ToggleFavoriteProps {
  item: Item
}

const ToggleFavorite: React.FC<ToggleFavoriteProps> = ({ item }) => {
  const { toggleFavorite } = useFavorites()
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isMovieFavorite = favoriteMovies.some(
      (fav: Item) => fav.id === item.id
    )
    setIsFav(isMovieFavorite)
  }, [item.id, item.type])

  const handleToggleFavorite = () => {
    const favoriteItem = {
      id: item.id,
      title: item.title,
      imagePath: item.imagePath,
      voteAverage: item.voteAverage,
      releaseDate: item.releaseDate,
      firstAirDate: item.firstAirDate,
      type: item.type,
    }
    toggleFavorite(favoriteItem)
    setIsFav(!isFav)
  }

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        // fontSize: '2.1rem',
        marginBottom: '3px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
      }}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFav ? <HeartFilled /> : <HeartOutline />}
    </button>
  )
}

export default ToggleFavorite
