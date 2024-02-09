import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Project from './pages/Project'

function App() {

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
