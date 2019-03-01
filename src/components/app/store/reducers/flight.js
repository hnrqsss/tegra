import { createReducer } from 'reduxsauce'

import { Types } from '../actions'

import dates from '../../../../utils/constants/dates'

import { timeDiff } from '../../../../utils/flightsTimeDiff'

const INITIAL_STATE = {
    isFetching: false,
    airports: [],
    date: '',
    flights: [],
    defaultFlights: [],
    errors: []
}

export const startRequestAirports = (state = INITIAL_STATE, action) => {

    return {
        ...state,
        date: dates.startDate,
        isFetching: true,
    }
}

export const requestAirportsSuccess = (state = INITIAL_STATE, action) => {

    return {
        ...state,
        isFetching: false,
        airports: action.airports,
        errors: []
    }
}

export const requestAirportsError = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isFetching: false,
        airports: [],
        errors: action.errors
    }
}

export const startRequestFlights = (state = INITIAL_STATE) => {
    return {
        ...state,
        isFetching: true,
        errors: [],
        flights: []
    }
}

export const requestFlightsSuccess = (state = INITIAL_STATE, action) => {

    const { flights } = action

    const newFlights = flights.map(flight => {

        flight.total = 0

        flight.duracao = timeDiff(flight)

        flight.voos.map(item => flight.total += parseFloat(item.valor))

        return flight
    })

    return {
        ...state,
        isFetching: false,
        errors: [],
        flights: newFlights,
        defaultFlights: newFlights
    }
}

export const requestFlightsError = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isFetching: false,
        errors: action.errors,
        flights: []
    }
}

export const selectDate = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        date: action.date
    }
}

export const HANDLERS = {
    [Types.START_REQUEST_AIRPORTS]: startRequestAirports,
    [Types.REQUEST_AIRPORTS_SUCCESS]: requestAirportsSuccess,
    [Types.REQUEST_AIRPORTS_ERROR]: requestAirportsError,

    [Types.START_REQUEST_FLIGHTS]: startRequestFlights,
    [Types.REQUEST_FLIGHTS_SUCCESS]: requestFlightsSuccess,
    [Types.REQUEST_FLIGHTS_ERROR]: requestFlightsError,

    [Types.SELECT_DATE]: selectDate
}

export default createReducer(INITIAL_STATE, HANDLERS)