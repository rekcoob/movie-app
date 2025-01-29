// src/components/layout/Navbar.tsx
'use client'
import React from 'react'
import './Navbar.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Top Rated', href: '/movies/top-rated' },
  { label: 'Popular', href: '/movies/popular' },
  // { label: 'Now Playing', href: '/movies/now-playing' },
  // { label: 'Upcoming', href: '/movies/upcoming' },
  { label: 'Favorites', href: '/favorites' },
  { label: 'Series', href: '/series' },
  { label: 'Actors', href: '/actors' },
]

export const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav>
      <div className='nav-container'>
        <h1>
          <Link href='/'>
            🎬<span> Movie App</span>
          </Link>
        </h1>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
