// services/api.ts
'use server'

import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

// Create an axios instance with default settings
const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
})

export const fetchMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: { page },
    })
    // console.log(response.data)
    return response.data
  } catch {
    throw new Error('Failed to fetch movies')
  }
}

// export const fetchMovies = async () => {
//   try {
//     const response = await apiClient.get('/movie/popular', {
//       params: { page: 1 },
//     })
//     return response.data
//   } catch {
//     throw new Error('Failed to fetch movies')
//   }
// }

export const fetchSeries = async (page = 1) => {
  try {
    const response = await apiClient.get('/tv/popular', { params: { page } })
    return response.data
  } catch {
    throw new Error('Failed to fetch series')
  }
}

export const fetchActors = async (page = 1) => {
  try {
    const response = await apiClient.get('/person/popular', {
      params: { page },
    })
    return response.data
  } catch {
    throw new Error('Failed to fetch actors')
  }
}

// Fetch a single movie by ID
export const fetchMovieById = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}`)
    return response.data
  } catch {
    throw new Error('Failed to fetch movie')
  }
}

// Fetch a single series by ID
export const fetchSeriesById = async (id: number) => {
  try {
    const response = await apiClient.get(`/tv/${id}`)
    return response.data
  } catch {
    throw new Error('Failed to fetch series')
  }
}

// Fetch a single actor by ID
export const fetchActorById = async (id: number) => {
  try {
    const response = await apiClient.get(`/person/${id}`)
    return response.data
  } catch {
    throw new Error('Failed to fetch actor')
  }
}

// Fetch popular movies sorted by popularity
export const fetchPopularMovies = async () => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: { page: 1, sort_by: 'popularity.desc' },
    })
    return response.data
  } catch {
    throw new Error('Failed to fetch popular movies')
  }
}

// Fetch now playing movies
export const fetchNowPlayingMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/now_playing', {
      params: { page },
    })
    return response.data
  } catch {
    throw new Error('Failed to fetch now-playing movies')
  }
}

// Fetch upcoming movies
export const fetchUpcomingMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/upcoming', {
      params: { page },
    })
    return response.data
  } catch {
    throw new Error('Failed to fetch upcoming movies')
  }
}

// Fetch top-rated movies
export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await apiClient.get('/movie/top_rated', {
      params: { page },
    })
    return response.data
  } catch {
    throw new Error('Failed to fetch top-rated movies')
  }
}
