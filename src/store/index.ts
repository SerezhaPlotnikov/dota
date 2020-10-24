import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { HeroesReducer } from './heroes/reducers'
import heroesSaga from './heroes/sagas'
import { HeroesState } from './heroes/types'
import { LeaguesReducer } from './leagues/reducers'
import leaguesSaga from './leagues/sagas'
import { LeaguesState } from './leagues/types'

export interface ApplicationState {
  heroes: HeroesState
  leagues: LeaguesState
}
export const createRootReducer = () =>
  combineReducers({
    heroes: HeroesReducer,
    leagues: LeaguesReducer,
  })

export function* rootSaga() {
  yield all([fork(heroesSaga), fork(leaguesSaga)])
}
