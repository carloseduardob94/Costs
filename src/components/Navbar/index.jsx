import { Link } from 'react-router-dom'
import { Layout } from '../Layout'
import logo from '../../img/costs_logo.png'
import { Container } from './styles'


export const Navbar = () => {
  return(
    <Container>
      <Layout>
        <Link to='/'>
          <img src={logo} alt="Costs Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>         
          </li>
          <li>
            <Link to="/projects">Projetos</Link>         
          </li>
        </ul>
      </Layout>
    </Container>
  )
}