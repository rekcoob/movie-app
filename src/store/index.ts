import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';
import { IMovie } from './types';

const favorites: IMovie[] = localStorage.getItem('favoriteMovies')
	? JSON.parse(localStorage.getItem('favoriteMovies')!)
	: [];

const initialState = {
	favoriteList: { favorites },
};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
