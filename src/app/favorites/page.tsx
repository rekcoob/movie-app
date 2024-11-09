// app/favoriteList/page.tsx

import React from 'react'
import Link from 'next/link'

// const IMG_API = 'https://image.tmdb.org/t/p/w500'
// const NO_IMAGE = '/path/to/default-image.jpg' // Nahraďte cestou k predvolenému obrázku

interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  release_date: string
}

interface FavoriteListProps {
  favorites?: Movie[] // Definujeme ako nepovinný prop
}

const FavoriteListPage: React.FC<FavoriteListProps> = ({ favorites = [] }) => {
  return (
    <div>
      {favorites.length > 0 ? (
        <div className='list-container'>
          {favorites.map((movie) => (
            <div className='card' key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <div>
                  {/* <img
                    src={
                      movie.poster_path ? IMG_API + movie.poster_path : NO_IMAGE
                    }
                    alt={movie.title}
                  /> */}
                  <h3>{movie.title}</h3>
                  <p>
                    <span>{movie.vote_average * 10}% | </span>
                    <span>
                      {new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      }).format(new Date(movie.release_date))}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h2 className='py-2 text-center'>No Movies Found</h2>
      )}
    </div>
  )
}

export default FavoriteListPage
