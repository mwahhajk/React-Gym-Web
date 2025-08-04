import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutSession from './components/WorkoutSession';
import Gallery from './components/Gallery';
import "./App.css" 
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Hero/>
    <WorkoutSession/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <ToastContainer theme='dark' position='top-center'/>
    </Router>
    </>
  )
}

export default App