import React from 'react'
import FormFlights from '../formFlights';

import { Container, HorizontalCenter } from '../../utils/defaultStyles/dafaultStyles'

class App extends React.Component {
    render() {
        return(
            <Container>
                <HorizontalCenter>
                    <h2>Desafio Frontend Tegra</h2>
                    <FormFlights />
                </HorizontalCenter>
            </Container>
        )
    }
}

export default App