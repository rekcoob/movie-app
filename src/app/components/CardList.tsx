// components/CardList.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { Movie } from '../types'
import { fetchMovies, IMG_API } from '../services/api'
import CardItem from './CardItem'

interface CardListProps {
  initialMovies: Movie[]
}

const CardList = ({ initialMovies }: CardListProps) => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies)
  const [page, setPage] = useState(2) // Start from page 2 since page 1 is server-rendered
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadMoreMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchMovies(page)
      setMovies((prev) => [...prev, ...data.results])
      setPage((prev) => prev + 1)
    } catch (err) {
      setError('Failed to load more movies')
      console.error('Error loading movies:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY
    const threshold = document.documentElement.offsetHeight - 1000

    if (scrollPosition >= threshold && !loading) {
      loadMoreMovies()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading])

  return (
    <>
      <div className='list-container'>
        {movies.map((movie) => (
          <CardItem
            key={`${movie.id}-${movie.title}`}
            id={movie.id}
            linkPath={`/movies/${movie.id}`}
            title={movie.title}
            imagePath={IMG_API + movie.poster_path}
            voteAverage={movie.vote_average}
            date={movie.release_date}
          />
        ))}
      </div>

      {loading && (
        <div className='flex justify-center py-8'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900' />
        </div>
      )}

      {error && (
        <div className='text-center py-4'>
          <p className='text-red-500'>{error}</p>
          <button
            onClick={loadMoreMovies}
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Try Again
          </button>
        </div>
      )}
    </>
  )
}

export default CardList
