import { put } from 'redux-saga/effects'
import { Creators } from '../actions'
import { api } from '../../../../utils/api'

export function* getAirPorts() {

  // CORS origin error
  const { data } = yield api.get('/companies')

  yield put(Creators.requestAirportsSuccess(data))

}