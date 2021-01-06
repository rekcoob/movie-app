import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const MOVIES_LOADING = 'MOVIES_LOADING';
export const GET_MOVIES = 'GET_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const SERIALS_LOADING = 'SERIALS_LOADING';
export const GET_SERIALS = 'GET_SERIALS';
export const SEARCH_SERIALS = 'SEARCH_SERIALS';

export const ACTORS_LOADING = 'ACTORS_LOADING';
export const GET_ACTORS = 'GET_ACTORS';
export const SEARCH_ACTORS = 'SEARCH_ACTORS';

export const MOVIE_LOADING = 'MOVIE_LOADING';
export const GET_MOVIE = 'GET_MOVIE';

export const SERIAL_LOADING = 'SERIAL_LOADING';
export const GET_SERIAL = 'GET_SERIAL';

export const ACTOR_LOADING = 'ACTOR_LOADING';
export const GET_ACTOR = 'GET_ACTOR';

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

/**
 * Serial Interface
 */
export interface ISerial {
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	first_air_date: string;
	vote_average: number;
	genres: IGenre[];
}

/**
 * Actor Interface
 */
export interface IActor {
	id: number;
	name: string;
	biography: string;
	profile_path: string;
	birthday: string;
	place_of_birth: string;
}

export interface IGenre {
	id: number;
	name: string;
}

export interface RootState {
	movieList: MovieListState;
	serialList: SerialListState;
	actorList: ActorListState;
	movieItem: MovieItemState;
	serialItem: SerialItemState;
	actorItem: ActorItemState;
	favoriteList: FavoriteListState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

/**
 * Movie List
 */
export type MovieListState = {
	movies: IMovie[] | null;
	loading: boolean;
};
interface MovieListLoadingAction {
	type: typeof MOVIES_LOADING;
}
interface MovieListGetAction {
	type: typeof GET_MOVIES;
	payload: IMovie[];
}
interface MovieListSearchAction {
	type: typeof SEARCH_MOVIES;
	payload: IMovie[];
}

export type MovieListActionTypes =
	| MovieListLoadingAction
	| MovieListGetAction
	| MovieListSearchAction;

/**
 * Serial List
 */
export type SerialListState = {
	serials: ISerial[] | null;
	loading: boolean;
};
interface SerialListLoadingAction {
	type: typeof SERIALS_LOADING;
}
interface SerialListGetAction {
	type: typeof GET_SERIALS;
	payload: ISerial[];
}
interface SerialListSearchAction {
	type: typeof SEARCH_SERIALS;
	payload: ISerial[];
}

export type SerialListActionTypes =
	| SerialListLoadingAction
	| SerialListGetAction
	| SerialListSearchAction;

/**
 * Actor List
 */
export type ActorListState = {
	actors: [] | null;
	loading: boolean;
};
interface ActorListLoadingAction {
	type: typeof ACTORS_LOADING;
}
interface ActorListGetAction {
	type: typeof GET_ACTORS;
	payload: IActor[];
}
interface ActorListSearchAction {
	type: typeof SEARCH_ACTORS;
	payload: IActor[];
}

export type ActorListActionTypes =
	| ActorListLoadingAction
	| ActorListGetAction
	| ActorListSearchAction;

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
 * Movie Item
 */
export type SerialItemState = {
	serial: ISerial;
	loading: boolean;
};
interface SerialItemLoadingAction {
	type: typeof SERIAL_LOADING;
}
interface SerialItemGetAction {
	type: typeof GET_SERIAL;
	payload: ISerial;
}
export type SerialItemActionTypes =
	| SerialItemLoadingAction
	| SerialItemGetAction;

/**
 * Actor Item
 */
export type ActorItemState = {
	actor: IActor;
	loading: boolean;
};
interface ActorItemLoadingAction {
	type: typeof ACTOR_LOADING;
}
interface ActorItemGetAction {
	type: typeof GET_ACTOR;
	payload: IActor;
}
export type ActorItemActionTypes = ActorItemLoadingAction | ActorItemGetAction;

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
