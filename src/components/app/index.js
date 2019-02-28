import React from 'react'
import FormFlights from '../formFlights';

import { Provider } from 'react-redux'

import { Container, Title } from '../../utils/defaultStyles/dafaultStyles'

import { Creators } from './store/actions'


import store from './store'


class App extends React.Component {

    componentDidMount() {
        store.dispatch(Creators.startRequestAirports())
    }

    render() {
        return (
            <Container>
                <Title>Tegra</Title>
                <Provider store={store}>
                    <FormFlights />
                </Provider>
            </Container>
        )
    }
}

export default App