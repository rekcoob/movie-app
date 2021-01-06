import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from './reducers/rootReducer';
import { reducers } from './reducers';

const favorites = localStorage.getItem('favoriteMovies')
	? JSON.parse(localStorage.getItem('favoriteMovies')!)
	: [];

const initialState: any = {
	favoriteList: { favorites },
};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
