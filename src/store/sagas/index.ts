import { all } from 'redux-saga/effects'
import { GuysWatcher } from './guys'

export default function* rootSaga() {
  yield all([GuysWatcher()])
}
