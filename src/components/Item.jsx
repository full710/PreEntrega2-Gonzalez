import React from 'react'
import '../styles/item.css'
import { NavLink } from 'react-router-dom'
const Item = ({ item }) => {

  return (
    <div className='itemContainer'>
      <img src={item.imagenes[0]} />
      <h2>{item.nombre}</h2>
      <div>
        {item.descripcion.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <span>${item.precio}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button>Detail</button>
      </NavLink>
    </div>
  )
}

export default Item
