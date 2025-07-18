import { useState } from 'react'
import './style/index.css'
import Navbar from './components/Navbar'
import Credit from './components/Credit'
import Hamkormobile from './components/Hamkormobile'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar/>
      <Credit/>
      <Hamkormobile/>
      <About/>
    </>
  )
}

export default App
