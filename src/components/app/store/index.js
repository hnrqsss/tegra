import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'

import index from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(index)

export default store


