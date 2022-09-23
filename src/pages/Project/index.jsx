import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'
import { Container } from './styles'

import { Loading } from '../../components/Loading'
import { Layout } from '../../components/Layout'
import { ProjectForm } from '../../components/ProjectForm'
import { Message } from '../../components/Message'
import { ServiceForm } from '../../components/ServiceForm'
import { ServiceCard } from '../../components/ServiceCard'

export const Project = () => {
  const { id } = useParams()

  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  function createService(project){
    setMessage('')

    // last service
    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    // maximum value validation
    if (newCost > parseFloat(project.budget)){
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return false
    }

    //add service cost to project total cost
    project.cost = newCost

    //update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(project)
    }).then(response => response.json())
    .then(data => {
      setServices(data.services)
      setShowServiceForm(!showServiceForm)
      setMessage('Serviço adicionado')
      setType('success')
    })
    .catch(err => console.log(err))
  }

  function editPost(project) {
    setMessage('')
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

  function removeService(id, cost){
    setMessage('')
    const servicesUpdated = project.services.filter((service) => service.id !== id) 

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(projectUpdated)
    }).then(response => response.json())
    .then(() => {
      setProject(projectUpdated)
      setServices(servicesUpdated)
      setMessage('Serviço removido com sucesso')
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
        setServices(data.services)
      }).catch(err => console.log(err))
  }, [id])
  
  return (<>
    {project.name ? (
    <Container>
      <Layout customClass="column">
        {message && <Message type={type} msg={message} />}
        <div className="details_container">
          <h1>Projeto: {project.name}</h1>
          <button className="edit_project_button" onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
          {!showProjectForm ? (
            <div className="project_info">
              <p>
                <span>Categoria:</span> {project.category.name}
              </p>
              <p>
                <span>Total de Orçamento:</span> {project.budget}
              </p>
              <p>
                <span>Total Utilizado:</span> R${project.cost}
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
        <div className="service_form_container">
          <h2>Adicione um serviço:</h2>
          <button className="edit_project_button" onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}</button>
          <div className="project_info">
            {showServiceForm && (
              <ServiceForm
                handleSubmit={createService}
                btnText="Adicionar serviço"
                projectData={project}
              />
            )}
          </div>
        </div>
        <h2>Serviços</h2>
        <Layout customClass="start">
          {services.length > 0 &&
            services.map((service) => (
              <ServiceCard
                id={service.id} 
                name={service.name} 
                cost={service.cost} 
                description={service.description} 
                key={service.id}
                handleRemove={removeService} 
              />
            ))
          }
          {services.length === 0 && <p>Não há serviços cadastrados.</p> }
        </Layout>
      </Layout>
    </Container>
    ) : 
      (<Loading />)}
  </>
  )
}