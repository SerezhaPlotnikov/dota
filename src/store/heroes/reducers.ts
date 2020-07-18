import { HeroesState, HeroesActionTypes } from './types';
import { Reducer } from 'redux';

export const initialState: HeroesState = {
	data: [],
	loading: false,
	errors: undefined,
};

const reducer: Reducer<HeroesState, any> = (state = initialState, action) => {
	switch (action.type) {
		case HeroesActionTypes.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case HeroesActionTypes.FETCH_SUCCESS: {
			return { ...state, loading: false, data: action.payload };
		}
		case HeroesActionTypes.FETCH_ERROR: {
			return { ...state, loading: false, error: action.payload };
		}
		default:
			return state;
	}
};

export { reducer as HeroesReducer };
