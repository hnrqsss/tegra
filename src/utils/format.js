export const formateToReal = (value) => {
  const valueString = value.toFixed(2).toString()

  return valueString.replace('.', ',')
}