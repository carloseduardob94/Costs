import { useState, useEffect } from 'react'

import { Input } from '../Input'
import { Select } from '../Select'
import { SubmitButton } from '../SubmitButton'
import { Container } from './styles'

export const ProjectForm = ({ btnText }) => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
    method: "GET",
    header: {
      'Content-Type': 'application/json'
    }
  }).then(resp => resp.json()).then(data => {
    setCategories(data)
  }).catch(err => console.log(err))
  }, [])

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
      <Select name="category_id" text="Selecione a categoria" options={categories}/>
      <SubmitButton text={btnText}/>
    </Container>
  )
}
