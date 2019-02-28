import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import dates from '../../utils/constants/dates'

import { connect } from 'react-redux'

import ptBr from 'date-fns/locale/pt-BR'

registerLocale('pt-BR', ptBr)

const startDate = new Date(dates.startDate)
const endDate = new Date(dates.endDate)


const FormFlights = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('test')

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <div>
                    <div>
                        <label htmlFor='from'>Origem: </label>
                        <select name='from'>
                            {props.airports !== undefined && props.airports.map(airport => (
                                <option
                                    key={airport.aeroporto}
                                    value={airport.aeroporto}
                                >{airport.nome}
                                </option>)
                            )}
                        </select>
                    </div>

                    <div>
                        <label htmlFor='to'>Destino: </label>
                        <select name='to'>
                            {props.airports !== undefined && props.airports.map(airport => (
                                <option
                                    key={airport.aeroporto}
                                    value={airport.aeroporto}
                                >{airport.nome}
                                </option>)
                            )}
                        </select>
                    </div>

                    <DatePicker
                        name='date'
                        selected={startDate}
                        dateFormat="d / MMMM / yyyy"
                        locale="pt-BR"
                        // onChange={this.handleChange}
                        minDate={startDate}
                        maxDate={endDate}
                        placeholderText="Data de saída"
                    />
                    <button>Pesquisar</button>

                </div>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        airports: state.flight.airports
    }
}


export default connect(mapStateToProps)(FormFlights)