import { action } from 'typesafe-actions'
import { League, LeaguesActionTypes } from './types'

export const fetchRequest = () => action(LeaguesActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: League) =>
  action(LeaguesActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) =>
  action(LeaguesActionTypes.FETCH_ERROR, message)
