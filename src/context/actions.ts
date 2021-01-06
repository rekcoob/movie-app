import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType, ACTIONS } from './types';

const API_KEY = process.env.REACT_APP_API_KEY;

// Get Popular Movies
const getMovies = async (dispatch: Dispatch<ActionType>) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
	);
	console.log(res.data);

	dispatch({
		type: ACTIONS.GET_MOVIES,
		payload: res.data.results,
	});
};

// Get Single Movie
const getMovie = async (dispatch: Dispatch<ActionType>, id: number) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
	);
	dispatch({
		type: ACTIONS.GET_MOVIE,
		payload: res.data,
	});
};

// Get Popular Serials
const getSerials = async (dispatch: Dispatch<ActionType>) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
	);
	dispatch({
		type: ACTIONS.GET_SERIALS,
		payload: res.data.results,
	});
};

// Get Single Serial
const getSerial = async (dispatch: Dispatch<ActionType>, id: number) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
	);
	dispatch({
		type: ACTIONS.GET_SERIAL,
		payload: res.data,
	});
};

// Get Popular Actors
const getActors = async (dispatch: Dispatch<ActionType>) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
	);
	dispatch({
		type: ACTIONS.GET_ACTORS,
		payload: res.data.results,
	});
};

// Get Single Actor
const getActor = async (dispatch: Dispatch<ActionType>, id: number) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
	);
	dispatch({
		type: ACTIONS.GET_ACTOR,
		payload: res.data,
	});
};

// Search Movies
const searchMovies = async (dispatch: Dispatch<ActionType>, text: string) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${text}`
	);
	dispatch({
		type: ACTIONS.SEARCH_MOVIES,
		payload: res.data.results,
	});
};

// Search Serials
const searchSerials = async (dispatch: Dispatch<ActionType>, text: string) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/tv?&api_key=${API_KEY}&query=${text}`
	);
	dispatch({
		type: ACTIONS.SEARCH_SERIALS,
		payload: res.data.results,
	});
};

// Search Actors
const searchActors = async (dispatch: Dispatch<ActionType>, text: string) => {
	setLoading(dispatch);

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/person?&api_key=${API_KEY}&query=${text}`
	);
	dispatch({
		type: ACTIONS.SEARCH_ACTORS,
		payload: res.data.results,
	});
};

// Add Movie To Favorites
export const addToFavorites = (movie: any): any => (
	dispatch: any,
	getState: any
) => {
	console.log('action');

	dispatch({
		type: ACTIONS.ADD_FAV,
		payload: movie,
	});
	localStorage.setItem('favoriteMovies', JSON.stringify(getState().favorites));
};

// Remove Movie From Favorites
export const removeFromFavorites = (id: string): any => (
	dispatch: any,
	getState: any
) => {
	dispatch({
		type: ACTIONS.REMOVE_FAV,
		payload: id,
	});
	localStorage.setItem('favoriteMovies', JSON.stringify(getState().favorites));
};

// Clear Movie From State
const clearMovie = (dispatch: Dispatch<ActionType>) =>
	dispatch({ type: ACTIONS.CLEAR_MOVIE });

// Clear Serial From State
const clearSerial = (dispatch: Dispatch<ActionType>) =>
	dispatch({ type: ACTIONS.CLEAR_SERIAL });

// Clear Actor From State
const clearActor = (dispatch: Dispatch<ActionType>) =>
	dispatch({ type: ACTIONS.CLEAR_ACTOR });

// Set Loading To True
const setLoading = (dispatch: Dispatch<ActionType>) =>
	dispatch({ type: ACTIONS.SET_LOADING });

export {
	getMovies,
	getMovie,
	getSerials,
	getSerial,
	getActors,
	getActor,
	searchMovies,
	searchActors,
	searchSerials,
	clearMovie,
	clearActor,
	clearSerial,
};
