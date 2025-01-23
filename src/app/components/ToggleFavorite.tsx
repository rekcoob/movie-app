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
  description: string
  subtitle?: string
  additionalInfo?: React.ReactNode
  type: 'movie' | 'series' | 'actor'
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
    toggleFavorite(item)
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
