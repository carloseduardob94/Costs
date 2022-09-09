import { Input } from '../Input'
import { Select } from '../Select'
import { SubmitButton } from '../SubmitButton'
import { Container } from './styles'

export const ProjectForm = ({ btnText }) => {
  return (
    <Container>
      <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto"
      />
      <Input 
        type="number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria"/>
      <SubmitButton text={btnText}/>
    </Container>
  )
}
