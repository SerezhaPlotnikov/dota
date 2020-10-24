export interface Hero {
  // id: number;
  // name: string;
  // localized_name: string;
  // img: string;
  // icon: string;

  id: number
  name: string
  localized_name: string
  img: string
  icon: string
  pro_win: number
  pro_pick: number
  hero_id: number
  pro_ban: number
  '1_pick': number
  '1_win': number
  '2_pick': number
  '2_win': number
  '3_pick': number
  '3_win': number
  '4_pick': number
  '4_win': number
  '5_pick': number
  '5_win': number
  '6_pick': number
  '6_win': number
  '7_pick': number
  '7_win': number

  // primary_attr: string;
  // attack_type: string;
  // roles: string;
}

export interface HeroesState {
  readonly loading: boolean
  readonly data: Hero[]
  readonly errors?: string
}

export enum HeroesActionTypes {
  FETCH_REQUEST = '@@heroes/FETCH_REQUEST',
  FETCH_SUCCESS = '@@heroes/FETCH_SUCCESS',
  FETCH_ERROR = '@@heroes/FETCH_ERROR',
}
