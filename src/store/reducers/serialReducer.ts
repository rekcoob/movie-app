import {
	ADD_SERIALS,
	ADD_SERIALS_REQUEST,
	GET_SERIALS,
	GET_SERIALS_REQUEST,
	SEARCH_SERIALS,
	SerialListActionTypes,
	SERIAL_LOADING,
	GET_SERIAL,
	SerialItemActionTypes,
} from '../types/serialTypes';

export const serialListReducer = (
	state = { serials: [] },
	action: SerialListActionTypes
) => {
	switch (action.type) {
		case GET_SERIALS_REQUEST:
			return { loading: true, serials: [] };
		case GET_SERIALS:
			return {
				...state,
				loading: false,
				serials: action.payload.serials,
				pages: action.payload.pages,
				results: action.payload.results,
			};
		case ADD_SERIALS_REQUEST:
			return { ...state, nextLoading: true };
		case ADD_SERIALS:
			return {
				...state,
				nextLoading: false,
				serials: [...state.serials, ...action.payload],
			};
		case SEARCH_SERIALS: {
			return {
				...state,
				loading: false,
				serials: action.payload.serials,
				pages: action.payload.pages,
				results: action.payload.results,
				query: action.payload.query,
			};
		}
		default:
			return state;
	}
};

export const serialItemReducer = (
	state = { serial: {} },
	action: SerialItemActionTypes
) => {
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
