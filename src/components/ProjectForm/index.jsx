import { Container } from './styles'

export const ProjectForm = () => {
  return (
    <Container>
      <form>
        <div>
          <input type="text" placeholder="Insira o nome do projeto" />
        </div>
        <div>
          <input type="number" placeholder="Insira o orçamento total" />
        </div>
        <div>
          <select name="category_id">
            <option disabled >Seleciona a categoria</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Criar projeto"/>
        </div>
      </form>
    </Container>
  )
}
