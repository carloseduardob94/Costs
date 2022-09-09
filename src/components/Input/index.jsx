import { Container } from './styles'

export const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return(
    <Container>
      <label htmlFor={name}>{text}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        id={name} 
        onChange={handleOnChange} 
        value={value}
      />
    </Container>
  )
}