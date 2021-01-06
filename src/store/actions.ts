import axios from 'axios';
import {
	ACTORS_LOADING,
	ACTOR_LOADING,
	ADD_FAV,
	AppThunk,
	GET_ACTOR,
	GET_ACTORS,
	GET_MOVIE,
	GET_MOVIES,
	GET_SERIAL,
	GET_SERIALS,
	IMovie,
	MOVIES_LOADING,
	MOVIE_LOADING,
	REMOVE_FAV,
	SEARCH_ACTORS,
	SEARCH_MOVIES,
	SEARCH_SERIALS,
	SERIALS_LOADING,
	SERIAL_LOADING,
} from './types';

const API_KEY = process.env.REACT_APP_API_KEY;

// Get Popular Movies
export const getMovies = (): AppThunk => async (dispatch) => {
	dispatch({ type: MOVIES_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
	);
	console.log(res.data);

	dispatch({
		type: GET_MOVIES,
		payload: res.data.results,
	});
};

// Search Movies
export const searchMovies = (query: string): AppThunk => async (dispatch) => {
	dispatch({ type: MOVIES_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${query}`
	);
	dispatch({
		type: SEARCH_MOVIES,
		payload: res.data.results,
	});
};

// Get Single Movie
export const getMovie = (id: number): AppThunk => async (dispatch) => {
	dispatch({ type: MOVIE_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
	);
	dispatch({
		type: GET_MOVIE,
		payload: res.data,
	});
};

// Get Popular Serials
export const getSerials = (): AppThunk => async (dispatch) => {
	dispatch({ type: SERIALS_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
	);
	dispatch({
		type: GET_SERIALS,
		payload: res.data.results,
	});
};

// Search Serials
export const searchSerials = (query: string): AppThunk => async (dispatch) => {
	dispatch({ type: SERIALS_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/tv?&api_key=${API_KEY}&query=${query}`
	);
	dispatch({
		type: SEARCH_SERIALS,
		payload: res.data.results,
	});
};

// Get Single Serial
export const getSerial = (id: number): AppThunk => async (dispatch) => {
	dispatch({ type: SERIAL_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
	);
	dispatch({
		type: GET_SERIAL,
		payload: res.data,
	});
};

// Get Popular Actors
export const getActors = (): AppThunk => async (dispatch) => {
	dispatch({ type: ACTORS_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
	);
	dispatch({
		type: GET_ACTORS,
		payload: res.data.results,
	});
};

// Search Actors
export const searchActors = (text: string): AppThunk => async (dispatch) => {
	dispatch({ type: ACTORS_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/person?&api_key=${API_KEY}&query=${text}`
	);
	dispatch({
		type: SEARCH_ACTORS,
		payload: res.data.results,
	});
};

// Get Single Actor
export const getActor = (id: number): AppThunk => async (dispatch) => {
	dispatch({ type: ACTOR_LOADING });

	const res = await axios.get(
		`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
	);
	dispatch({
		type: GET_ACTOR,
		payload: res.data,
	});
};

export const addToFavs = (movie: IMovie): AppThunk => (dispatch, getState) => {
	dispatch({
		type: ADD_FAV,
		payload: movie,
	});
	localStorage.setItem(
		'favoriteMovies',
		JSON.stringify(getState().favoriteList)
	);
};

export const removeFromFavs = (id: string): AppThunk => (
	dispatch,
	getState
) => {
	dispatch({
		type: REMOVE_FAV,
		payload: id,
	});
	localStorage.setItem(
		'favoriteMovies',
		JSON.stringify(getState().favoriteList)
	);
};
