import { Container } from './styles'

export const Select = ({ text, name, options, value, handleOnChange }) => {
  return(
    <Container>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </Container>
  )
}