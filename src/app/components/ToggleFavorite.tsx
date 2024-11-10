// src/components/ToggleFavorite.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { useFavorites } from '../context/FavoritesContext'

interface Movie {
  id: number
  title: string
  imagePath: string | null
  description: string
  subtitle?: string
  additionalInfo?: React.ReactNode
}

interface ToggleFavoriteProps {
  movie: Movie
}

const ToggleFavorite: React.FC<ToggleFavoriteProps> = ({ movie }) => {
  const { toggleFavorite } = useFavorites()
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    // Check if the movie is already in favorites based on local storage
    const favoriteMovies = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isMovieFavorite = favoriteMovies.some(
      (fav: Movie) => fav.id === movie.id
    )
    setIsFav(isMovieFavorite)
  }, [movie.id])

  const handleToggleFavorite = () => {
    toggleFavorite(movie)
    setIsFav(!isFav)
  }

  return (
    <button
      onClick={handleToggleFavorite}
      className='favorite-toggle'
      style={{
        color: isFav ? '#EE515E' : '#333',
        fontSize: '2.1rem',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
      }}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFav ? '❤️' : '♡'}
    </button>
  )
}

export default ToggleFavorite
