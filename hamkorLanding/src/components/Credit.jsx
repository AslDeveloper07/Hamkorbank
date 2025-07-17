import React from 'react'
import { CardData } from './DataBase'
import Button from './Button'

const Credit = () => {
  return (
    <div className='parentCard container'>
      {
        CardData.map((card, inx)=>(
          <div key={inx} className='card'>
            <img src={card.img} alt={card.title} />
           <div className='cardText'>
             <h3>{card.title}</h3>
            <p>{card.poragraph}</p>
            <Button name={card.btnTitle}  />
           </div>
          </div>
        ))
      }
    </div>
  )
}

export default Credit
