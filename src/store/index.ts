import { combineReducers } from 'redux';
import { fork, all } from 'redux-saga/effects';
import { HeroesState } from './heroes/types';
import { HeroesReducer } from './heroes/reducers';
import heroesSaga from './heroes/sagas';
import { LeaguesState } from './leagues/types';
import { LeaguesReducer } from './leagues/reducers';
import leaguesSaga from './leagues/sagas';

export interface ApplicationState {
	heroes: HeroesState;
	leagues: LeaguesState;
}
export const createRootReducer = () =>
	combineReducers({
		heroes: HeroesReducer,
		leagues: LeaguesReducer,
	});

export function* rootSaga() {
	yield all([fork(heroesSaga), fork(leaguesSaga)]);
}
