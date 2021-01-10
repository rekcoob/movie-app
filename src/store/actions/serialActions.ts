import axios from 'axios';
import { AppThunk } from '../types/rootTypes';
import {
	ADD_SERIALS,
	ADD_SERIALS_REQUEST,
	GET_SERIALS,
	GET_SERIALS_REQUEST,
	SEARCH_SERIALS,
	SERIAL_LOADING,
	GET_SERIAL,
} from '../types/serialTypes';

const API_KEY = process.env.REACT_APP_API_KEY;

// Get Popular Serials
export const getSerials = (): AppThunk => async (dispatch) => {
	dispatch({ type: GET_SERIALS_REQUEST });

	const res = await axios.get(
		// `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
		`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
	);

	dispatch({
		type: GET_SERIALS,
		payload: {
			serials: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
		},
	});
};

// Search Serials
export const searchSerials = (query: string): AppThunk => async (dispatch) => {
	dispatch({ type: GET_SERIALS_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/tv?&api_key=${API_KEY}&query=${query}`
	);
	dispatch({
		type: SEARCH_SERIALS,
		payload: {
			serials: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
			query: query,
		},
	});
};

// Add Popular Serials
export const addSerials = (page: number): AppThunk => async (dispatch) => {
	dispatch({ type: ADD_SERIALS_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`
	);
	dispatch({
		type: ADD_SERIALS,
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
