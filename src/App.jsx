import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewProject } from './pages/NewProject'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'

import { Layout } from './components/Layout'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Layout customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  )
}

export default App
