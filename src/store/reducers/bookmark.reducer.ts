import { Guy } from 'common/models/guy'
import { ReducerPayload } from 'src/common/interfaces/reducer-payload'
import * as types from 'src/constants/action-types.constant'

const initialState = {
  bookmark: {
    response: <Guy[]>[],
    loading: <boolean>false,
    error: null,
  },
}

const BookmarkReducer = (state = initialState, { type, payload }: ReducerPayload) => {
  switch (type) {
    /** ⸻⸻⸻⸻⸻⸻⸻⸻⸻---
     * Bookmark cases
     */
    case types.BOOKMARK.REQUEST:
      return {
        ...state,
        bookmark: { response: null, loading: true, error: null },
      }
    case types.BOOKMARK.SUCCESS:
      return {
        ...state,
        bookmark: { response: payload, loading: false, error: null },
      }
    case types.BOOKMARK.FAILURE:
      return {
        ...state,
        bookmark: { response: null, loading: false, error: payload },
      }

    default:
      return state
  }
}

export default BookmarkReducer
