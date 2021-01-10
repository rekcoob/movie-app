import {
	ADD_ACTORS,
	ADD_ACTORS_REQUEST,
	GET_ACTORS,
	GET_ACTORS_REQUEST,
	SEARCH_ACTORS,
	ActorListActionTypes,
	ACTOR_LOADING,
	GET_ACTOR,
	ActorItemActionTypes,
} from '../types/actorTypes';

export const actorListReducer = (
	state = { actors: [] },
	action: ActorListActionTypes
) => {
	switch (action.type) {
		case GET_ACTORS_REQUEST:
			return { loading: true, actors: [] };
		case GET_ACTORS:
			return {
				...state,
				loading: false,
				actors: action.payload.actors,
				pages: action.payload.pages,
				results: action.payload.results,
			};
		case ADD_ACTORS_REQUEST:
			return { ...state, nextLoading: true };
		case ADD_ACTORS:
			return {
				...state,
				nextLoading: false,
				actors: [...state.actors, ...action.payload],
			};
		case SEARCH_ACTORS: {
			return {
				...state,
				loading: false,
				actors: action.payload.actors,
				pages: action.payload.pages,
				results: action.payload.results,
				query: action.payload.query,
			};
		}
		default:
			return state;
	}
};

export const actorItemReducer = (
	state = { actor: {} },
	action: ActorItemActionTypes
) => {
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
