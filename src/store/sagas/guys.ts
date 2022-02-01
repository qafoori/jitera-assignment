import { call, takeLatest, put } from 'redux-saga/effects'
import { guysActions } from '../actions'
import * as types from 'common/constants/action-types'
import * as services from 'common/services/guys'

export function* GuysWatcher() {
  yield takeLatest(types.GET_GUYS.REQUEST, getGuysWorker)
}

const getGuysCaller = (data: Parameters<typeof guysActions.getGuysRequest>) => {
  return services.getGuys(...data)
}
function* getGuysWorker(_action: ReturnType<typeof guysActions.getGuysRequest>): object {
  try {
    const response = yield call(getGuysCaller, [])
    const { data, status } = response

    if (status === 200) {
      yield put(guysActions.getGuysSuccess(data))
    } else {
      throw data
    }
  } catch (err) {
    yield put(guysActions.getGuysFailure(<string>err))
  }
}
