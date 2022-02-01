import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const w = <any>window

const composeEnhancers =
  (w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.REACT_APP_MODE === 'development' &&
    w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
