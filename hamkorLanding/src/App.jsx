import { useState } from 'react'
import './style/index.css'
import Navbar from './components/Navbar'
import Credit from './components/Credit'
import Hamkormobile from './components/Hamkormobile'
import About from './components/About'
import Grids from './components/Grids'

function App() {

  return (
    <>
      <Navbar/>
      <Credit/>
      <Grids/>
      <About/>
      <Hamkormobile/>
    </>
  )
}

export default App
