// src/context/FavoritesContext.tsx
'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface Movie {
  id: number
  title: string
  // Add other properties as needed
}

interface FavoritesContextType {
  favorites: Movie[]
  toggleFavorite: (movie: Movie) => void
  isFavorite: (id: number) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(savedFavorites)
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (movie: Movie) => {
    const existItem = favorites.find((fav) => fav.id === movie.id)

    if (existItem) {
      // If the movie exists, remove it from favorites
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== movie.id)
      )
    } else {
      // If the movie does not exist, add it to favorites
      setFavorites((prevFavorites) => [...prevFavorites, movie])
    }
  }

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id)
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
