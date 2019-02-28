import { takeLatest } from 'redux-saga/effects'

import { getAirPorts, getFlights } from './flightsSagas'

function *index() {
    yield [
        takeLatest('START_REQUEST_AIRPORTS', getAirPorts),
        takeLatest('START_REQUEST_FLIGHTS', getFlights)
    ]
}

export default index