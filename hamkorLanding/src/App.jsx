import { useState } from 'react'
import './style/index.css'
import Navbar from './components/Navbar'
import Credit from './components/Credit'
import Hamkormobile from './components/Hamkormobile'
import About from './components/About'
import Grids from './components/Grids'
import Slider from './components/Slider'
import Calling from './components/Calling'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

function App() {

  return (
    <>
      <Navbar/>
      <Slider/>
      <Credit/>
      <Grids/>
      <About/>
      <Hamkormobile/>
      <Calling/>
      <Footer/>
      <MobileMenu/>
    </>
  )
}

export default App
