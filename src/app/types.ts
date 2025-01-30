// types.ts

// interface BaseItem {
//   id: number
//   description: string
//   imagePath: string | null
//   additionalInfo?: React.ReactNode
// }

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
  videos?: IVideoResult[]
}

export interface IMovieDetails extends IBaseDetails {
  type: 'movie'
  title: string
  voteAverage: number
  releaseDate: string
}

export interface ISeriesDetails extends IBaseDetails {
  type: 'series'
  title: string
  voteAverage: number
  firstAirDate: string
}

export interface IActorDetails extends IBaseDetails {
  type: 'actor'
  name: string
  birthday: string | null
  placeOfBirth: string | null
}

export type IContentDetails = IMovieDetails | ISeriesDetails | IActorDetails
