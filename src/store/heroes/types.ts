export interface Hero {
	id: number;
	name: string;
	primary_attr: string;
	attack_type: string;
	roles: string[];
}

export interface HeroesState {
	readonly loading: boolean;
	readonly data: Hero[];
	readonly errors?: string;
}

export enum HeroesActionTypes {
	FETCH_REQUEST = '@@heroes/FETCH_REQUEST',
	FETCH_SUCCESS = '@@heroes/FETCH_SUCCESS',
	FETCH_ERROR = '@@heroes/FETCH_ERROR',
}
