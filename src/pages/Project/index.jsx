import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container } from './styles'

import { Loading } from '../../components/Loading'
import { Layout } from '../../components/Layout'

export const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }


  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    }).then(response => response.json())
      .then(data => {
        setProject(data)
      }).catch(err => console.log(err))
  }, [id])
  
  return (<>
    {project.name ? (
    <Container>
      <Layout customClass="column">
        <div className="details_container">
          <h1>Projeto: {project.name}</h1>
          <button onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'fechar'}</button>
          {!showProjectForm ? (
            <div className="project_info">
              <p>
                <span>Categoria:</span> {project.category.name}
              </p>
              <p>
                <span>Total de Orçamento</span> {project.budget}
              </p>
              <p>
                <span>Total Utilizado</span> R${project.cost}
              </p>
            </div>
          ) : (
            <div className="project_info">
              <p>form</p>
            </div>
          )}
        </div>
      </Layout>
    </Container>
    ) : 
      (<Loading />)}
  </>
  )
}