import { ProjectForm } from '../../components/ProjectForm'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export const NewProject = () => {
  let navigate = useNavigate()

  const createPost = project => {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        //redirect
        navigate('/projects', {
          state: 'Projeto criado com sucesso!'
        })
      })
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </Container>
  )
}
