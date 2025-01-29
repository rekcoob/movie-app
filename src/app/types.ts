// types.ts

// interface BaseItem {
//   id: number
//   description: string
//   imagePath: string | null
//   additionalInfo?: React.ReactNode
// }

interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  title: string
  poster_path: string | null
  overview: string
  vote_average: number
  release_date: string
  genres: Genre[]
  videos?: {
    results: VideoResult[]
  }
}

export interface Series {
  id: number
  name: string
  poster_path: string | null
  overview: string
  vote_average: number
  first_air_date: string
  genres: Genre[]
  videos?: {
    results: VideoResult[]
  }
}

export interface Actor {
  id: number
  name: string
  profile_path: string | null
  biography: string
  birthday: string
  place_of_birth: string | null
}

export interface VideoResult {
  key: string
  site: string
  type: string
  name: string
}

export interface BaseDetails {
  id: number
  description: string
  imagePath: string | null
  additionalInfo?: React.ReactNode
  // trailer
  videos?: VideoResult[]
}

export interface MovieDetails extends BaseDetails {
  type: 'movie'
  title: string
  voteAverage: number
  releaseDate: string
}

export interface SeriesDetails extends BaseDetails {
  type: 'series'
  title: string
  voteAverage: number
  firstAirDate: string
}

export interface ActorDetails extends BaseDetails {
  type: 'actor'
  name: string
  birthday: string | null
  placeOfBirth: string | null
}

export type ContentDetails = MovieDetails | SeriesDetails | ActorDetails
