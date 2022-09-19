import { Container } from './styles'
import { Message } from '../../components/Message'

import { useLocation } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { LinkButton } from '../../components/LinkButton'


export const Projects = () => {
  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state
  }

  return(
    <Container>
      <div>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <Layout customClass="start">
        <p>Projetos...</p>
      </Layout>
    </Container>
  )
}