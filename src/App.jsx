import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import { Home } from './pages/Home'
import { Company } from './pages/Company'
import { Contact } from './pages/Contact'
import { NewProject } from './pages/NewProject'


const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      <p>Footer</p>
    </BrowserRouter>
  )
}

export default App
