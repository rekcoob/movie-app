import React, { createContext, Dispatch, useReducer } from 'react';
import { reducer } from './reducer';
import { StateType, ActionType } from './types';

const initialState = {
	movies: [],
	movie: {},
	serials: [],
	serial: {},
	actors: [],
	actor: {},
	loading: false,
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
