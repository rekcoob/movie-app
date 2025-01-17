// components/InfiniteScroll.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { Movie } from '../types'
import { fetchMovies } from '../services/api'
import styles from './InfiniteScroll.module.css' // Import CSS module

interface InfiniteScrollProps {
  initialMovies: Movie[]
  children: (movies: Movie[]) => React.ReactNode
}

const InfiniteScroll = ({ initialMovies, children }: InfiniteScrollProps) => {
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
      {children(movies)}

      {loading && (
        <div className={styles.flexCenter}>
          <div className={styles.spinner} />
        </div>
      )}

      {error && (
        <div className={styles.textCenter}>
          <p className={styles.textRed}>{error}</p>
          <button onClick={loadMoreMovies} className={styles.button}>
            Try Again
          </button>
        </div>
      )}
    </>
  )
}

export default InfiniteScroll
