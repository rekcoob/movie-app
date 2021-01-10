import {
	ADD_MOVIES,
	ADD_MOVIES_REQUEST,
	GET_MOVIES,
	GET_MOVIES_REQUEST,
	SEARCH_MOVIES,
	MovieListActionTypes,
	MOVIE_LOADING,
	GET_MOVIE,
	MovieItemActionTypes,
	ADD_FAV,
	REMOVE_FAV,
	FavoriteListState,
	FavoriteListActionTypes,
} from '../types/movieTypes';

export const movieListReducer = (
	state = { movies: [] },
	action: MovieListActionTypes
) => {
	switch (action.type) {
		case GET_MOVIES_REQUEST:
			return { loading: true, movies: [] };
		case GET_MOVIES:
			return {
				...state,
				loading: false,
				movies: action.payload.movies,
				pages: action.payload.pages,
				results: action.payload.results,
			};
		case ADD_MOVIES_REQUEST:
			return { ...state, nextLoading: true };
		case ADD_MOVIES:
			return {
				...state,
				nextLoading: false,
				// movies: state.movies.concat(action.payload),
				movies: [...state.movies, ...action.payload],
			};
		case SEARCH_MOVIES: {
			return {
				...state,
				loading: false,
				movies: action.payload.movies,
				pages: action.payload.pages,
				results: action.payload.results,
				query: action.payload.query,
			};
		}
		default:
			return state;
	}
};

export const movieItemReducer = (
	state = { movie: {} },
	action: MovieItemActionTypes
) => {
	switch (action.type) {
		case MOVIE_LOADING:
			return { ...state, loading: true };
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export const favoriteListReducer = (
	state: FavoriteListState = { favorites: [] },
	action: FavoriteListActionTypes
) => {
	switch (action.type) {
		case ADD_FAV:
			const item = action.payload;
			const existItem = state.favorites.find((x) => x.id === item.id);

			if (existItem) {
				return {
					...state,
					favorites: state.favorites.map((x) =>
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
				favorites: state.favorites.filter((x) => x.id !== action.payload),
			};
		default:
			return state;
	}
};
