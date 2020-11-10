import { StateType, ActionType, ACTIONS } from './types';

export const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case ACTIONS.GET_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false,
			};
		case ACTIONS.GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case ACTIONS.GET_SERIALS:
			return {
				...state,
				serials: action.payload,
				loading: false,
			};
		case ACTIONS.GET_SERIAL:
			return {
				...state,
				serial: action.payload,
				loading: false,
			};
		case ACTIONS.GET_ACTORS:
			return {
				...state,
				actors: action.payload,
				loading: false,
			};
		case ACTIONS.GET_ACTOR:
			return {
				...state,
				actor: action.payload,
				loading: false,
			};
		case ACTIONS.CLEAR_MOVIE: {
			return {
				...state,
				movie: {},
				loading: false,
			};
		}
		case ACTIONS.CLEAR_SERIAL: {
			return {
				...state,
				serial: {},
				loading: false,
			};
		}
		case ACTIONS.CLEAR_ACTOR: {
			return {
				...state,
				actor: {},
				loading: false,
			};
		}
		case ACTIONS.SEARCH_MOVIES: {
			return {
				...state,
				movies: action.payload,
				loading: false,
			};
		}
		case ACTIONS.SEARCH_SERIALS: {
			return {
				...state,
				serials: action.payload,
				loading: false,
			};
		}
		case ACTIONS.SEARCH_ACTORS: {
			return {
				...state,
				actors: action.payload,
				loading: false,
			};
		}
		case ACTIONS.SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
