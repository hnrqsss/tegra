import React from 'react'

import { connect } from 'react-redux'

import Flight from '../flight'

import { Ul } from './style'

const Flights = (props) => {
  return (
    <div>
      <Ul>
        {props.flights.length !== 0 && (
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

const mapStateToProps = state => {
  return {
    flights: state.flight.flights
  }
}

export default connect(mapStateToProps)(Flights)