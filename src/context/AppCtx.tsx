import React, { createContext, Dispatch, useReducer } from 'react';
import { reducer } from './reducer';
import { StateType, ActionType, IMovie, IActor, ISerial } from './types';

const favorites = localStorage.getItem('favoriteMovies')
	? JSON.parse(localStorage.getItem('favoriteMovies')!)
	: [];

const initialState = {
	movies: null,
	movie: {} as IMovie,
	serials: null,
	serial: {} as ISerial,
	actors: null,
	actor: {} as IActor,
	loading: false,
	favorites: favorites,
};

const AppCtx = createContext<{
	state: StateType;
	dispatch: Dispatch<ActionType>;
}>({
	state: initialState,
	dispatch: () => null,
});

const AppProvider: React.FC = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppCtx.Provider value={{ state, dispatch }}>
			{props.children}
		</AppCtx.Provider>
	);
};

export { AppCtx, AppProvider };
