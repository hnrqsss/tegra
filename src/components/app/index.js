import React from 'react'
import FormFlights from '../formFlights';

import { Provider } from 'react-redux'

import { Container, HorizontalCenter } from '../../utils/defaultStyles/dafaultStyles'

import { Creators } from './store/actions'


import store from './store'


class App extends React.Component {
    
    componentDidMount() {
        store.dispatch(Creators.startRequestAirports())
    }
    
    render() {
        return(
            <Container>
                <HorizontalCenter>
                    <h2>Desafio Frontend Tegra</h2>
                    <Provider store={store}>
                        <FormFlights />
                    </Provider>
                    
                </HorizontalCenter>
            </Container>
        )
    }
}

export default App