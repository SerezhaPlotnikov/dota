export interface League {
	leagueid: number;
	ticket: string;
	banner: string;
	tier: string;
	name: string;
}

export interface LeaguesState {
	readonly loading: boolean;
	readonly data: League[];
	readonly errors?: string;
}

export enum LeaguesActionTypes {
	FETCH_REQUEST = '@@leagues/FETCH_REQUEST',
	FETCH_SUCCESS = '@@leagues/FETCH_SUCCESS',
	FETCH_ERROR = '@@leagues/FETCH_ERROR',
}
