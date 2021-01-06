import { combineReducers } from 'redux';
import {
	ACTORS_LOADING,
	ACTOR_LOADING,
	ADD_FAV,
	CLEAR_MOVIE,
	GET_ACTOR,
	GET_ACTORS,
	GET_MOVIE,
	GET_MOVIES,
	GET_SERIAL,
	GET_SERIALS,
	MOVIES_LOADING,
	MOVIE_LOADING,
	REMOVE_FAV,
	SEARCH_ACTORS,
	SEARCH_MOVIES,
	SEARCH_SERIALS,
	SERIALS_LOADING,
	SERIAL_LOADING,
} from './types';

// import { moviesReducer } from './moviesReducer';
// import { movieReducer } from './movieReducer';
// import { favReducer } from './favReducer';

const movieListReducer = (state = { movies: [] }, action: any) => {
	switch (action.type) {
		case MOVIES_LOADING:
			return { loading: true, movies: null };
		case GET_MOVIES:
			return {
				...state,
				loading: false,
				movies: action.payload,
			};
		case SEARCH_MOVIES: {
			return {
				...state,
				loading: false,
				movies: action.payload,
			};
		}
		default:
			return state;
	}
};

const serialListReducer = (state = { serials: [] }, action: any) => {
	switch (action.type) {
		case SERIALS_LOADING:
			return { loading: true, serials: null };
		case GET_SERIALS:
			return {
				...state,
				loading: false,
				serials: action.payload,
			};
		case SEARCH_SERIALS: {
			return {
				...state,
				loading: false,
				serials: action.payload,
			};
		}
		default:
			return state;
	}
};

const actorListReducer = (state = { actors: [] }, action: any) => {
	switch (action.type) {
		case ACTORS_LOADING:
			return { loading: true, actors: null };
		case GET_ACTORS:
			return {
				...state,
				loading: false,
				actors: action.payload,
			};
		case SEARCH_ACTORS: {
			return {
				...state,
				loading: false,
				actors: action.payload,
			};
		}
		default:
			return state;
	}
};

const movieItemReducer = (state = { movie: {} }, action: any) => {
	switch (action.type) {
		case MOVIE_LOADING:
			return { ...state, loading: true };
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case CLEAR_MOVIE: {
			return {
				...state,
				movie: {} as any,
				loading: false,
			};
		}
		default:
			return state;
	}
};

const serialItemReducer = (state = { serial: {} }, action: any) => {
	switch (action.type) {
		case SERIAL_LOADING:
			return { ...state, loading: true };
		case GET_SERIAL:
			return {
				...state,
				serial: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

const actorItemReducer = (state = { actor: {} }, action: any) => {
	switch (action.type) {
		case ACTOR_LOADING:
			return { ...state, loading: true };
		case GET_ACTOR:
			return {
				...state,
				actor: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

const favoriteListReducer = (state = { favorites: [] }, action: any) => {
	switch (action.type) {
		case ADD_FAV:
			const item = action.payload;
			// @ts-ignore
			const existItem = state.favorites.find((x) => x.id === item.id);

			if (existItem) {
				return {
					...state,
					favorites: state.favorites.map((x) =>
						// @ts-ignore
						x.id === existItem.id ? item : x
					),
				};
			} else {
				return {
					...state,
					favorites: [...state.favorites, item],
				};
			}
		case REMOVE_FAV:
			return {
				...state,
				// @ts-ignore
				favorites: state.favorites.filter((x) => x.id !== action.payload),
			};
		default:
			return state;
	}
};

export const reducers = combineReducers({
	movieList: movieListReducer,
	serialList: serialListReducer,
	actorList: actorListReducer,
	movieItem: movieItemReducer,
	serialItem: serialItemReducer,
	actorItem: actorItemReducer,
	favoriteList: favoriteListReducer,
});

export type RootState = ReturnType<typeof reducers>;
