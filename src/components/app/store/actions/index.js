import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
   
   startRequestAirPorts: null,
   requestAirPortsSuccess: ['airPorts'],
   requestAirPortsError: ['errors'],

   requestFlights: ['flights'],

   selectDate: ['date']

})

export default Creators