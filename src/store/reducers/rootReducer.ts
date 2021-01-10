import { combineReducers } from 'redux';
import {
	movieListReducer,
	movieItemReducer,
	favoriteListReducer,
} from './movieReducer';
import { serialListReducer, serialItemReducer } from './serialReducer';
import { actorListReducer, actorItemReducer } from './actorReducer';

export const rootReducer = combineReducers({
	movieList: movieListReducer,
	serialList: serialListReducer,
	actorList: actorListReducer,
	movieItem: movieItemReducer,
	serialItem: serialItemReducer,
	actorItem: actorItemReducer,
	favoriteList: favoriteListReducer,
});
