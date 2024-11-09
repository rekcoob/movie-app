// src/components/layout/Navbar.tsx
import React from 'react'
import Link from 'next/link'
import './Navbar.scss'

type Props = {
  icon?: string
  title?: string
}

export const Navbar: React.FC<Props> = (
  {
    // title = 'MovieApp',
    // icon = 'fas fa-video',
  }
) => {
  return (
    <nav>
      <div className='nav-container'>
        <h1>
          <Link href='/'>
            {/* 🍿  */}
            🎬 Movies
            {/* <i className={icon} /> {title} */}
          </Link>
        </h1>
        <ul>
          <li>
            <Link href='/'>Movies</Link>
          </li>
          <li>
            <Link href='/favorites'>Favorites</Link>
          </li>
          <li>
            <Link href='/serials'>TV Shows</Link>
          </li>
          <li>
            <Link href='/actors'>Actors</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
