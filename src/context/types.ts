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
}

export interface IGenre {
	id: number;
	name: string;
}

export type StateType = {
	movies: IMovie[] | null;
	movie: IMovie;
	serials: ISerial[] | null;
	serial: ISerial | any;
	actors: IActor[] | null;
	actor: IActor | any;
	loading: boolean;
};

export type ActionType =
	| { type: 'GET_MOVIES'; payload: IMovie[] }
	| { type: 'GET_MOVIE'; payload: IMovie }
	| { type: 'CLEAR_MOVIE' }
	| { type: 'CLEAR_ACTOR' }
	| { type: 'CLEAR_SERIAL' }
	| { type: 'GET_ACTORS'; payload: IActor[] }
	| { type: 'GET_ACTOR'; payload: IActor }
	| { type: 'GET_SERIALS'; payload: ISerial[] }
	| { type: 'GET_SERIAL'; payload: ISerial }
	| { type: 'SEARCH_MOVIES'; payload: IMovie[] }
	| { type: 'SEARCH_ACTORS'; payload: IActor[] }
	| { type: 'SEARCH_SERIALS'; payload: ISerial[] }
	| { type: 'SET_LOADING' };

export enum ACTIONS {
	GET_MOVIES = 'GET_MOVIES',
	GET_MOVIE = 'GET_MOVIE',
	CLEAR_SERIAL = 'CLEAR_SERIAL',
	CLEAR_ACTOR = 'CLEAR_ACTOR',
	CLEAR_MOVIE = 'CLEAR_MOVIE',
	SEARCH_SERIALS = 'SEARCH_SERIALS',
	SEARCH_ACTORS = 'SEARCH_ACTORS',
	SEARCH_MOVIES = 'SEARCH_MOVIES',
	GET_SERIAL = 'GET_SERIAL',
	GET_SERIALS = 'GET_SERIALS',
	GET_ACTOR = 'GET_ACTOR',
	GET_ACTORS = 'GET_ACTORS',
	SET_LOADING = 'SET_LOADING',
}
