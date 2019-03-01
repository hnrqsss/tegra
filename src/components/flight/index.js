import React from 'react'

import {
  Li,
  HeaderFlight,
  BodyFlights,
  Info
} from './style'


const Flight = ({ flight }) => {
  return (
    <Li>
      {flight.legth !== 0 ? (<div>
        <HeaderFlight>
          {/* header */}
          {console.log(flight)}
          <span>Total R$ {flight.total}</span>
          <span>Duração {flight.duracao} horas</span>
        </HeaderFlight>

        <BodyFlights>
          <h3>Escalas</h3>
          {/* body */}

          {flight.voos.map((item,index) => (
            <Info key={index}>
              <div>
                {/* header voos */}
                <span>Vôo: {item.voo}</span>
                <span>Saída: {item.saida}</span>
                <span>Chegada: {item.chegada}</span>
                <span>Valor: R${item.valor}</span>
              </div>
            </Info>
          ))}

        </BodyFlights>

      </div>) : <span>Nenhum vôo encontrado</span>}
    </Li>

  )
}

export default Flight