import axios from 'axios';
import {
	ADD_MOVIES,
	ADD_MOVIES_REQUEST,
	GET_MOVIES,
	GET_MOVIES_REQUEST,
	SEARCH_MOVIES,
	MOVIE_LOADING,
	GET_MOVIE,
	ADD_FAV,
	REMOVE_FAV,
	IMovie,
} from '../types/movieTypes';
import { AppThunk } from '../types/rootTypes';

const API_KEY = process.env.REACT_APP_API_KEY;

// Get Popular Movies
export const getMovies = (): AppThunk => async (dispatch) => {
	dispatch({ type: GET_MOVIES_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
	);

	dispatch({
		type: GET_MOVIES,
		payload: {
			movies: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
		},
	});
};

// Search Movies
export const searchMovies = (query: string): AppThunk => async (dispatch) => {
	dispatch({ type: GET_MOVIES_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`
	);

	dispatch({
		type: SEARCH_MOVIES,
		payload: {
			movies: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
			query: query,
		},
	});
};

// Get Popular Movies
export const addMovies = (page: number): AppThunk => async (dispatch) => {
	dispatch({ type: ADD_MOVIES_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
	);

	dispatch({
		type: ADD_MOVIES,
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

// Add Movie To Favorites
export const addToFavs = (movie: IMovie): AppThunk => (dispatch, getState) => {
	dispatch({
		type: ADD_FAV,
		payload: {
			id: movie.id,
			title: movie.title,
			overview: movie.overview,
			poster_path: movie.poster_path,
			release_date: movie.release_date,
			vote_average: movie.vote_average,
			genres: movie.genres,
		},
	});
	localStorage.setItem(
		'favoriteMovies',
		JSON.stringify(getState().favoriteList.favorites)
	);
};

// Remove Movie From Favorites
export const removeFromFavs = (id: number): AppThunk => (
	dispatch,
	getState
) => {
	dispatch({
		type: REMOVE_FAV,
		payload: id,
	});
	localStorage.setItem(
		'favoriteMovies',
		JSON.stringify(getState().favoriteList.favorites)
	);
};
