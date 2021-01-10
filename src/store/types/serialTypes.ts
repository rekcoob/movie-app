export const GET_SERIALS_REQUEST = 'GET_SERIALS_REQUEST';
export const GET_SERIALS = 'GET_SERIALS';
export const SEARCH_SERIALS = 'SEARCH_SERIALS';
export const ADD_SERIALS_REQUEST = 'ADD_SERIALS_REQUEST';
export const ADD_SERIALS = 'ADD_SERIALS';

export const SERIAL_LOADING = 'SERIAL_LOADING';
export const GET_SERIAL = 'GET_SERIAL';

/**
 * Serial Interface
 */
export interface ISerial {
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	first_air_date: string;
	vote_average: number;
	genres: IGenre[];
}

export interface IGenre {
	id: number;
	name: string;
}

/**
 * Serial List
 */
export type SerialListState = {
	serials: ISerial[];
	loading: boolean;
	query: string;
	nextLoading: boolean;
	pages: number;
	results: number;
};
interface SerialListRequestAction {
	type: typeof GET_SERIALS_REQUEST;
}
interface SerialListGetAction {
	type: typeof GET_SERIALS;
	payload: {
		serials: ISerial[];
		pages: number;
		results: number;
	};
}
interface SerialListSearchAction {
	type: typeof SEARCH_SERIALS;
	payload: {
		serials: ISerial[];
		pages: number;
		results: number;
		query: string;
	};
}
interface SerialListAddAction {
	type: typeof ADD_SERIALS;
	payload: ISerial[];
}
interface SerialListAddRequestAction {
	type: typeof ADD_SERIALS_REQUEST;
}
export type SerialListActionTypes =
	| SerialListRequestAction
	| SerialListGetAction
	| SerialListSearchAction
	| SerialListAddAction
	| SerialListAddRequestAction;

/**
 * Serial Item
 */
export type SerialItemState = {
	serial: ISerial;
	loading: boolean;
};
interface SerialItemLoadingAction {
	type: typeof SERIAL_LOADING;
}
interface SerialItemGetAction {
	type: typeof GET_SERIAL;
	payload: ISerial;
}
export type SerialItemActionTypes =
	| SerialItemLoadingAction
	| SerialItemGetAction;
