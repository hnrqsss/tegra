import { takeLatest } from 'redux-saga/effects'

import { getAirPorts } from './flightsSagas'

function *index() {
    yield [
        takeLatest('START_REQUEST_AIRPORTS', getAirPorts)
    ]
}

export default index