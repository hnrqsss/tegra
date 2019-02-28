import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({

    startRequestAirports: null,
    requestAirportsSuccess: ['airports'],
    requestAirportsError: ['errors'],

    startRequestFlights: ['search'],
    requestFlightsSuccess: ['flights'],
    requestFlightsError: ['errors'],

    selectDate: ['date']

})

export default Creators