import { combineReducers } from 'redux';
import { fork, all } from 'redux-saga/effects';
import { HeroesState } from './heroes/types';
import { HeroesReducer } from './heroes/reducers';
import heroesSaga from './heroes/sagas';

export interface ApplicationState {
	heroes: HeroesState;
}
export const createRootReducer = () =>
	combineReducers({
		heroes: HeroesReducer,
	});

export function* rootSaga() {
	yield all([fork(heroesSaga)]);
}
