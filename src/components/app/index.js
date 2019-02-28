import React from 'react'
import FormFlights from '../formFlights';

import { Provider } from 'react-redux'

import { Container } from '../../utils/defaultStyles/dafaultStyles'

import { Creators } from './store/actions'


import store from './store'
import Menu from '../menu'


class App extends React.Component {

    componentDidMount() {
        store.dispatch(Creators.startRequestAirports())
    }

    render() {
        return (
            <div>
                <Menu />
                <Container>                    
                    <Provider store={store}>
                        <FormFlights />
                    </Provider>
                </Container>
            </div>
        )
    }
}

export default App