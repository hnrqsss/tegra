import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import  dates from '../../utils/constants/dates'

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
                {console.log(props)}
                <div>
                    <select name='from'>
                        {props.airports !== undefined ? console.log('opa') : console.log('nao')}
                    </select>

                    <select name='to'>
                        <option>teste</option>
                    </select>

                    <DatePicker
                        selected={startDate}
                        dateFormat="d/MM/yyyy"
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
        airports: state.airports
    }
}


export default connect(mapStateToProps)(FormFlights)