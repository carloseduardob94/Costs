import { Container } from './styles'
import savings from '../../img/savings.svg'
import { LinkButton } from '../../components/LinkButton'

export const Home = () => {
  return(
    <Container>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projetos"/>
      <img src={savings} alt="Costs" />
    </Container>
  )
}