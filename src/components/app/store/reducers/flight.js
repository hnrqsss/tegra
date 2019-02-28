import { createReducer } from 'reduxsauce'

import { Types } from '../actions'

import dates from '../../../../utils/constants/dates'


const INITIAL_STATE = {
    isFetching: false,
    airports: [],
    date: new Date(dates.startDate),
    flights: [],
    errors: []
}

export const startRequestAirports = (state = INITIAL_STATE, action) => {

    return {
        ...state,
        isFetching: true,
    }
}

export const requestAirportsSuccess = (state = INITIAL_STATE, action) => {
    
    console.log(action)
    
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
    return {
        ...state,
        isFetching: false,
        errors: [],
        flights: action.flights
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