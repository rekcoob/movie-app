import axios from 'axios';
import {
	ADD_ACTORS,
	ADD_ACTORS_REQUEST,
	GET_ACTORS,
	GET_ACTORS_REQUEST,
	SEARCH_ACTORS,
	ACTOR_LOADING,
	GET_ACTOR,
} from '../types/actorTypes';
import { AppThunk } from '../types/rootTypes';

const API_KEY = process.env.REACT_APP_API_KEY;

// Get Popular Actors
export const getActors = (): AppThunk => async (dispatch) => {
	dispatch({ type: GET_ACTORS_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
	);

	dispatch({
		type: GET_ACTORS,
		payload: {
			actors: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
		},
	});
};

// Search Actors
export const searchActors = (query: string): AppThunk => async (dispatch) => {
	dispatch({ type: GET_ACTORS_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/search/person?&api_key=${API_KEY}&query=${query}`
	);
	dispatch({
		type: SEARCH_ACTORS,
		payload: {
			actors: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
			query: query,
		},
	});
};

// Add Popular Actors
export const addActors = (page: number): AppThunk => async (dispatch) => {
	dispatch({ type: ADD_ACTORS_REQUEST });

	const res = await axios.get(
		`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
	);
	dispatch({
		type: ADD_ACTORS,
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
