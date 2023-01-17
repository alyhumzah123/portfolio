import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='color'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      {/* <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/> */}

    </div>
  )
}
export default App
