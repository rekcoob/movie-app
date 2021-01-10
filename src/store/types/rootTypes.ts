import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
	MovieListState,
	MovieItemState,
	FavoriteListState,
} from './movieTypes';
import { SerialListState, SerialItemState } from './serialTypes';
import { ActorItemState, ActorListState } from './actorTypes';

export interface RootState {
	movieList: MovieListState;
	serialList: SerialListState;
	actorList: ActorListState;
	movieItem: MovieItemState;
	serialItem: SerialItemState;
	actorItem: ActorItemState;
	favoriteList: FavoriteListState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
