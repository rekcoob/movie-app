export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES = 'GET_MOVIES';
export const ADD_MOVIES_REQUEST = 'ADD_MOVIES_REQUEST';
export const ADD_MOVIES = 'ADD_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const ADD_SEARCH_MOVIES = 'ADD_SEARCH_MOVIES';

export const MOVIE_LOADING = 'MOVIE_LOADING';
export const GET_MOVIE = 'GET_MOVIE';

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

/**
 * Movie Interface
 */
export interface IMovie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
	genres: IGenre[];
}

export interface IGenre {
	id: number;
	name: string;
}

/**
 * Movie List
 */
export type MovieListState = {
	movies: IMovie[];
	loading: boolean;
	query: string;
	nextLoading: boolean;
	results: number;
	pages: number;
};
interface MovieListRequestAction {
	type: typeof GET_MOVIES_REQUEST;
}
interface MovieListGetAction {
	type: typeof GET_MOVIES;
	payload: {
		movies: IMovie[];
		pages: number;
		results: number;
	};
}
interface MovieListSearchAction {
	type: typeof SEARCH_MOVIES;
	payload: {
		movies: IMovie[];
		pages: number;
		results: number;
		query: string;
	};
}
interface MovieListAddAction {
	type: typeof ADD_MOVIES;
	payload: IMovie[];
}
interface MovieListAddRequestAction {
	type: typeof ADD_MOVIES_REQUEST;
}
interface MovieListSearchAddAction {
	type: typeof ADD_SEARCH_MOVIES;
	payload: IMovie[];
}

export type MovieListActionTypes =
	| MovieListRequestAction
	| MovieListAddRequestAction
	| MovieListGetAction
	| MovieListSearchAction
	| MovieListAddAction
	| MovieListSearchAddAction;

/**
 * Movie Item
 */
export type MovieItemState = {
	movie: IMovie;
	loading: boolean;
};
interface MovieItemLoadingAction {
	type: typeof MOVIE_LOADING;
}
interface MovieItemGetAction {
	type: typeof GET_MOVIE;
	payload: IMovie;
}
export type MovieItemActionTypes = MovieItemLoadingAction | MovieItemGetAction;

/**
 * Favorites List
 */
export type FavoriteListState = {
	favorites: IMovie[];
};
interface FavoriteListAddAction {
	type: typeof ADD_FAV;
	payload: IMovie;
}
interface FavoriteListRemoveAction {
	type: typeof REMOVE_FAV;
	payload: number | string;
}
export type FavoriteListActionTypes =
	| FavoriteListAddAction
	| FavoriteListRemoveAction;
