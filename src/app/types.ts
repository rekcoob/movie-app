// types.ts

export interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
  release_date: string
  overview: string
  genres?: Genre[] // Optional genres if you decide to include them later
}

export interface Series {
  id: number
  name: string
  poster_path: string | null
  vote_average: number
  first_air_date: string
  genres?: Genre[]
}

export interface Actor {
  id: number
  name: string
  profile_path: string | null
  birthday: string | null
  place_of_birth: string
  popularity: string
}
