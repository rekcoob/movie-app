import {
	StateType,
	ActionType,
	ACTIONS,
	IMovie,
	ISerial,
	IActor,
} from './types';

export const reducer = (state: StateType, action: any) => {
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
				movie: {} as IMovie,
				loading: false,
			};
		}
		case ACTIONS.CLEAR_SERIAL: {
			return {
				...state,
				serial: {} as ISerial,
				loading: false,
			};
		}
		case ACTIONS.CLEAR_ACTOR: {
			return {
				...state,
				actor: {} as IActor,
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
		case ACTIONS.ADD_FAV:
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
		case ACTIONS.REMOVE_FAV:
			return {
				...state,
				favorites: state.favorites.filter((x) => x.id !== action.payload),
			};
		default:
			return state;
	}
};
