export const GET_ACTORS_REQUEST = 'GET_ACTORS_REQUEST';
export const GET_ACTORS = 'GET_ACTORS';
export const SEARCH_ACTORS = 'SEARCH_ACTORS';
export const ADD_ACTORS_REQUEST = 'ADD_ACTORS_REQUEST';
export const ADD_ACTORS = 'ADD_ACTORS';

export const ACTOR_LOADING = 'ACTOR_LOADING';
export const GET_ACTOR = 'GET_ACTOR';

/**
 * Actor Interface
 */
export interface IActor {
	id: number;
	name: string;
	biography: string;
	profile_path: string;
	birthday: string;
	place_of_birth: string;
}

/**
 * Actor List
 */
export type ActorListState = {
	actors: IActor[];
	loading: boolean;
	query: string;
	nextLoading: boolean;
	pages: number;
	results: number;
};
interface ActorListRequestAction {
	type: typeof GET_ACTORS_REQUEST;
}
interface ActorListGetAction {
	type: typeof GET_ACTORS;
	payload: {
		actors: IActor[];
		pages: number;
		results: number;
	};
}
interface ActorListSearchAction {
	type: typeof SEARCH_ACTORS;
	payload: {
		actors: IActor[];
		pages: number;
		results: number;
		query: string;
	};
}
interface ActorListAddAction {
	type: typeof ADD_ACTORS;
	payload: IActor[];
}
interface ActorListAddRequestAction {
	type: typeof ADD_ACTORS_REQUEST;
}
export type ActorListActionTypes =
	| ActorListRequestAction
	| ActorListGetAction
	| ActorListSearchAction
	| ActorListAddAction
	| ActorListAddRequestAction;

/**
 * Actor Item
 */
export type ActorItemState = {
	actor: IActor;
	loading: boolean;
};
interface ActorItemLoadingAction {
	type: typeof ACTOR_LOADING;
}
interface ActorItemGetAction {
	type: typeof GET_ACTOR;
	payload: IActor;
}
export type ActorItemActionTypes = ActorItemLoadingAction | ActorItemGetAction;
