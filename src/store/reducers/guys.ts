import { Guy } from 'common/models/guy'
import { ReducerType } from 'common/typing/reducer-payload.type'
import * as types from 'common/constants/action-types'

const initialState = {
  guys: {
    response: <Guy[] | null>null,
    loading: <boolean>false,
    error: null,
  },
}

export const guysReducer = (state = initialState, { type, payload }: ReducerType): typeof initialState => {
  switch (type) {
    /** ⸻⸻⸻⸻⸻⸻⸻⸻⸻---
     * get guys cases
     */
    case types.GET_GUYS.REQUEST:
      return {
        ...state,
        guys: { response: null, loading: true, error: null },
      }
    case types.GET_GUYS.SUCCESS:
      return {
        ...state,
        guys: { response: payload, loading: false, error: null },
      }
    case types.GET_GUYS.FAILURE:
      return {
        ...state,
        guys: { response: null, loading: false, error: payload },
      }

    default:
      return state
  }
}
