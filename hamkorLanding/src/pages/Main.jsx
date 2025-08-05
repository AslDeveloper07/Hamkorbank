import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Credit from '../components/Credit'
import Grids from '../components/Grids'
import About from '../components/About'
import Hamkormobile from '../components/Hamkormobile'
import Calling from '../components/Calling'
import Footer from '../components/Footer'

const Main = () => {
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
    </>
  )
}

export default Main