import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

import Flight from '../flight'

import { Ul } from './style'

import { Creators } from '../app/store/actions'

const Flights = (props) => {

  const filterTotal = () => {

    const newFlights = props.flights.sort((first, second) => {
      return first.total - second.total
    })

    props.requestFlightsSuccess(newFlights)

  }

  const filterTime = () => {

    const newFlights = props.flights.sort((first, second) => {
      return first.duracao - second.duracao
    })

    props.requestFlightsSuccess(newFlights)

  }

  return (
    <div>
      <Ul>
        {props.flights.length !== 0 && (
          <div>
            <button onClick={filterTotal}><FontAwesomeIcon icon={faDollarSign} /></button>
            <button onClick={filterTime} ><FontAwesomeIcon icon={faClock} /></button>
          </div>
        )}

        {(
          props.flights.map((flight, index) => (
            <Flight
              flight={flight}
              key={index}
            />
          )
          )
        )}

      </Ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    flights: state.flight.flights
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestFlightsSuccess: (flights) => dispatch(Creators.requestFlightsSuccess(flights))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights)