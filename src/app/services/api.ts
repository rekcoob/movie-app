// services/api.ts

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const IMG_API = 'https://image.tmdb.org/t/p/w500'

export const fetchMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
  if (!response.ok) throw new Error('Failed to fetch movies')
  return response.json()
}

export const fetchSeries = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
  if (!response.ok) throw new Error('Failed to fetch series')
  return response.json()
}

export const fetchActors = async () => {
  const response = await fetch(
    `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
  if (!response.ok) throw new Error('Failed to fetch actors')
  return response.json()
}

// Fetch a single movie by ID
export const fetchMovieById = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  )
  if (!response.ok) throw new Error('Failed to fetch movie')
  return response.json()
}

// Fetch a single series by ID
export const fetchSeriesById = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`
  )
  if (!response.ok) throw new Error('Failed to fetch series')
  return response.json()
}

// Fetch a single actor by ID
export const fetchActorById = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`
  )
  if (!response.ok) throw new Error('Failed to fetch actor')
  return response.json()
}
