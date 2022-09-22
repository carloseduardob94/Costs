import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container } from './styles'

import { Loading } from '../../components/Loading'
import { Layout } from '../../components/Layout'
import { ProjectForm } from '../../components/ProjectForm'
import { Message } from '../../components/Message'

export const Project = () => {
  const { id } = useParams()

  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function editPost(project) {
    // budget validation
    if(project.budget < project.cost) {
      setMessage('Orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(project)
    }).then(response => response.json())
    .then(data => {
      setProject(data)
      setShowProjectForm(false)
      setMessage('Projeto atualizado')
      setType('success')
    })
    .catch(err => console.log(err))
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
        {message && <Message type={type} msg={message} />}
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
              <ProjectForm 
                handleSubmit={editPost} 
                btnText="Concluir Edição" 
                projectData={project} 
              />
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