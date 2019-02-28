import { put } from 'redux-saga/effects'
import { Creators } from '../actions'
// import { api } from '../../../../utils/api'

const airports = [
  {
    "nome": "Aeroporto Internacional Juscelino Kubitschek",
    "aeroporto": "BSB",
    "cidade": "Brasília"
  },
  {
    "nome": "Aeroporto Eurico de Aguiar Salles",
    "aeroporto": "VIX",
    "cidade": "Vitória"
  },
  {
    "nome": "Aeroporto Internacional Zumbi dos Palmares",
    "aeroporto": "MCZ",
    "cidade": "Maceió"
  },
  {
    "nome": "Aeroporto Internacional de Belém de Cans",
    "aeroporto": "BEL",
    "cidade": "Belém"
  },
  {
    "nome": "Aeroporto Internacional Hercílio Luz",
    "aeroporto": "FLN",
    "cidade": "Florianópolis"
  },
  {
    "nome": "Aeroporto de Congonhas Paulo",
    "aeroporto": "CGH",
    "cidade": "São Paulo"
  },
  {
    "nome": "Aeroporto Internacional de Aracaju",
    "aeroporto": "AJU",
    "cidade": "Aracaju"
  },
  {
    "nome": "Aeroporto Internacional de Viracopos",
    "aeroporto": "VCP",
    "cidade": "Campinas"
  },
  {
    "nome": "Aeroporto de Palmas",
    "aeroporto": "PMW",
    "cidade": "Palmas"
  },
  {
    "nome": "Aeroporto da Pampulha",
    "aeroporto": "PLU",
    "cidade": "Belo Horizonte"
  }
]

export function *getAirPorts() {
    
    // CORS origin error
    // const { data } =  yield api.get('/companies')
                
    yield put(Creators.requestAirportsSuccess(airports))

}