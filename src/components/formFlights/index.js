import React from 'react'
import { registerLocale } from 'react-datepicker'

import dateformat from 'dateformat'

import 'react-datepicker/dist/react-datepicker.css'

import dates from '../../utils/constants/dates'

import { connect } from 'react-redux'

import ptBr from 'date-fns/locale/pt-BR'
import addDays from 'date-fns/addDays'

import { Creators } from '../app/store/actions'

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

    const handleSubmit = async (event) => {

        event.preventDefault()

        const data = new FormData(event.target)

        const search = {
            from: data.get('from'),
            to: data.get('to'),
            date: props.date
        }

        props.startRequestFlights(search)
    }

    const handleDate = (date) => {
        const newDate = dateformat(date, 'yyyy-mm-d')

        props.selectDate(newDate)
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
                             dateFormat="d / MMMM / yyyy"
                            selected={addDays(new Date(props.date), 1)}
                            locale="pt-BR"
                            onChange={handleDate}
                            minDate={addDays(startDate,1)}
                            maxDate={addDays(endDate,1)}
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
        ...state,
        airports: state.flight.airports,
        date: state.flight.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectDate: (date) => dispatch(Creators.selectDate(date)),
        startRequestFlights: (search) => dispatch(Creators.startRequestFlights(search))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormFlights)