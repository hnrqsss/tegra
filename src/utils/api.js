import axios from 'axios'

const api = axios.create({
    baseUrl: 'https://api-voadora.dev.tegra.com.br/flight'
})

export default api