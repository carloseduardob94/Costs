import { Container } from './styles'

export const Select = ({ text, name, options, value, handleOnChange }) => {
  return (
    <Container>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </Container>
  )
}
