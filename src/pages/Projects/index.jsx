import { useState, useEffect } from 'react'
import { Container } from './styles'
import { useLocation } from 'react-router-dom'

import { Message } from '../../components/Message'
import { Layout } from '../../components/Layout'
import { Loading } from '../../components/Loading'
import { LinkButton } from '../../components/LinkButton'
import { ProjectCard } from '../../components/ProjectCard'


export const Projects = () => {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      setProjects(data)
      setRemoveLoading(true)
  })
    .catch((err) => console.log(err))
  }, [])
  
  return(
    <Container>
      <div className="div_1">
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <Layout customClass="start">
      {projects.length > 0 && 
          projects.map((project, index) => (
            <ProjectCard 
              id={project.id}
              key={project.id}
              name={project.name} 
              budget={project.budget} 
              category={project.category.name} 
            />
          ))
        }
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Layout>
    </Container>
  )
}