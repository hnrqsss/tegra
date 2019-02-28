import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import dates from '../../utils/constants/dates'

import { connect } from 'react-redux'

import ptBr from 'date-fns/locale/pt-BR'

import {
    Form,
    FormGroup,
    Select,
    Option,
    DateCustom,
    Label,
    ButtonGroup,
    Button
} from './style'

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
            <Form onSubmit={handleSubmit} >

                <div>
                    <FormGroup>
                        <Label htmlFor='from'>Origem: </Label>
                        <Select name='from'>
                            {props.airports !== undefined && props.airports.map(airport => (
                                <Option
                                    key={airport.aeroporto}
                                    value={airport.aeroporto}
                                >{airport.nome}
                                </Option>)
                            )}
                        </Select>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='to'>Destino: </Label>
                        <Select name='to'>
                            {props.airports !== undefined && props.airports.map(airport => (
                                <Option
                                    key={airport.aeroporto}
                                    value={airport.aeroporto}
                                >{airport.nome}
                                </Option>)
                            )}
                        </Select>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='date'>Data: </Label>
                        <DateCustom
                            name='date'
                            Selected={startDate}
                            dateFormat="d / MMMM / yyyy"
                            locale="pt-BR"
                            // onChange={this.handleChange}
                            minDate={startDate}
                            maxDate={endDate}
                            placeholderText={'Data de saída'}

                        />
                    </FormGroup>

                    <ButtonGroup>
                        <Button>Pesquisar</Button>
                    </ButtonGroup>

                </div>
            </Form>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        airports: state.flight.airports
    }
}


export default connect(mapStateToProps)(FormFlights)