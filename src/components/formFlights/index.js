import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import  dates from '../../utils/constants/dates'

import ptBr from 'date-fns/locale/pt-BR'

registerLocale('pt-BR', ptBr)

const startDate = new Date(dates.startDate)
const endDate = new Date(dates.endDate)


const FormFlights = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('opa')

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <select>
                        <option>teste</option>
                    </select>

                    <select>
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

export default FormFlights