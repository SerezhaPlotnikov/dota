import { LeaguesState, LeaguesActionTypes } from './types';
import { Reducer } from 'redux';

export const initialState: LeaguesState = {
	data: [],
	loading: false,
	errors: undefined,
};

const reducer: Reducer<LeaguesState, any> = (state = initialState, action) => {
	switch (action.type) {
		case LeaguesActionTypes.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case LeaguesActionTypes.FETCH_SUCCESS: {
			return { ...state, loading: false, data: action.payload };
		}
		case LeaguesActionTypes.FETCH_ERROR: {
			return { ...state, loading: false, error: action.payload };
		}
		default:
			return state;
	}
};

export { reducer as LeaguesReducer };
