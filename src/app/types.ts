// types.ts

export interface IBaseItem {
  id: number
  title?: string
  name?: string // for TV shows and actors
  poster_path?: string | null
  profile_path?: string | null // for actors
  vote_average?: number
  release_date?: string
  first_air_date?: string // for TV shows
}

interface IGenre {
  id: number
  name: string
}

export interface IMovie {
  id: number
  title: string
  poster_path: string | null
  overview: string
  vote_average: number
  release_date: string
  genres: IGenre[]
  videos?: {
    results: IVideoResult[]
  }
}

export interface ISeries {
  id: number
  name: string
  poster_path: string | null
  overview: string
  vote_average: number
  first_air_date: string
  genres: IGenre[]
  videos?: {
    results: IVideoResult[]
  }
}

export interface IActor {
  id: number
  name: string
  profile_path: string | null
  biography: string
  birthday: string
  place_of_birth: string | null
}

export interface IVideoResult {
  key: string
  site: string
  type: string
  name: string
}

export interface IBaseDetails {
  id: number
  description: string
  imagePath: string | null
  additionalInfo?: React.ReactNode
}

export interface IMovieDetails extends IBaseDetails {
  type: 'movie'
  title: string
  voteAverage: number
  releaseDate: string
  videos?: IVideoResult[]
}

export interface ISeriesDetails extends IBaseDetails {
  type: 'series'
  title: string
  voteAverage: number
  firstAirDate: string
  videos?: IVideoResult[]
}

export interface IActorDetails extends IBaseDetails {
  type: 'actor'
  name: string
  birthday: string | null
  placeOfBirth: string | null
}

export type IContentDetails = IMovieDetails | ISeriesDetails | IActorDetails
