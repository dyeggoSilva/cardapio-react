import React from 'react'
import "./card.css"

interface Cardprops{
    preco: number,
    titulo: string,
    img:string
}

export default function Card({ titulo, img, preco}:Cardprops) {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h2>{titulo}</h2>
        <p><b>Valor: </b>{preco}</p>
      
    </div>
  )
}
