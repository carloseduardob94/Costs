import loading from '../../img/loading.svg'
import { Container } from './styles'

export const Loading = () => {
  return (
    <Container>
      <img src={loading} alt="loading" />
    </Container>
  )
}