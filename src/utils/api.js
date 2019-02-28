import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-voadora.dev.tegra.com.br/flight',
    header: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})
