export const timeDiff = (flight) => {

  let duracao = 0

  flight.voos.map(item => {

    const hourArrival = item.chegada.split(":")[0]

    const hourDeparture = item.saida.split(":")[0]

    const diff = hourArrival - hourDeparture

    return duracao += diff

  })

  return duracao
}