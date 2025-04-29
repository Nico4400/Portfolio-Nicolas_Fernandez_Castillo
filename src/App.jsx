import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/scrollToTop'

import Home from './pages/Home/home'
import Projects from './pages/Projects/projects'
import Skills from './pages/Skills/skills'
import Experience from './pages/Experience/experience'
import Contact from './pages/Contact/contact'
import NotFound from './pages/NotFound/notFound'
import About from './pages/About/about'

import './App.css'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  )
}

export default App
