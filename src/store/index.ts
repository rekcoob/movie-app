import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import { IMovie } from './types/movieTypes';

const favorites: IMovie[] = localStorage.getItem('favoriteMovies')
	? JSON.parse(localStorage.getItem('favoriteMovies')!)
	: [];

const initialState = {
	favoriteList: { favorites },
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
