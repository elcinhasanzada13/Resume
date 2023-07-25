import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Contact/>
    </BrowserRouter>
  )
}

export default AppRouter