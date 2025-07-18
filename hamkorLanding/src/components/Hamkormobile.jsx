import React from 'react'
import { HamkorMobileData } from './DataBase'
import './../style/index.css'
const Hamkormobile = () => {
  return (
    <div className='bg-hamkor container'>
      {HamkorMobileData.map((item, index) => (
  <div key={index}>
    <ul>
      {item.ilovaHaqida.map((text, i) => (
        <li key={i}>{text}</li>
      ))}
    </ul>
    <h5>{item.mobileBank}</h5>
    <p>{item.mobileBankQR}</p>
  </div>
))}
    </div>
  )
}

export default Hamkormobile
