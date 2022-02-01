import * as types from 'common/constants/action-types'
import { Guy } from 'common/models/guy'
import { ReducerType } from 'common/typing/reducer-payload.type'

/** ⸻⸻⸻⸻⸻⸻⸻⸻⸻---
 * get guys actions
 */
export const getGuysRequest = (): ReducerType<null> => {
  return {
    type: types.GET_GUYS.REQUEST,
    payload: null,
  }
}
export const getGuysSuccess = (payload: Guy[]): ReducerType<Guy[]> => {
  return {
    type: types.GET_GUYS.SUCCESS,
    payload,
  }
}
export const getGuysFailure = (error: string): ReducerType<string> => {
  return {
    type: types.GET_GUYS.FAILURE,
    payload: error,
  }
}
