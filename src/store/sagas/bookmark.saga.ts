import { call, takeLatest, put } from 'redux-saga/effects'
import { Bookmark } from '../actions'
import * as types from 'src/constants/action-types.constant'
import * as services from 'src/services/graphQl/bookmark-services'
import { GqlErrorFinder } from 'src/common/helpers/graphql-error-finder'

export function* BookmarkWatcher() {
  yield takeLatest(types.BOOKMARK.REQUEST, BookmarkWorker)
}

const BookmarkCaller = (data: Parameters<typeof Bookmark.bookmarkRequest>) => {
  return services.BookmarkService(...data)
}
function* BookmarkWorker(action: ReturnType<typeof Bookmark.bookmarkRequest>): object {
  try {
    const { input } = action.payload
    const response = yield call(BookmarkCaller, [input])
    const gotError = GqlErrorFinder(response)
    if (gotError) {
      throw null
    }
    const { data } = response.data
    yield put(Bookmark.bookmarkSuccess(data))
  } catch (err) {
    yield put(Bookmark.bookmarkFailure(err as any))
  }
}
