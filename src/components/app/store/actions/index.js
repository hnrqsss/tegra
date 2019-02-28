import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
   
   startRequestAirports: null,
   requestAirportsSuccess: ['airPorts'],
   requestAirportsError: ['errors'],
   
   startRequestFlights: null,
   requestFlightsSuccess: ['flights'],
   requestFlightsError: ['errors'],

   selectDate: ['date']

})

export default Creators