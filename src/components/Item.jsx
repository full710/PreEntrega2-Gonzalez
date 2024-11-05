import React from 'react'
import '../styles/item.css'
import { NavLink } from 'react-router-dom'


const Item = ({ item }) => {

  return (
    <div className='itemContainer'>
      <img src={item.image1} alt="" />
      <h2>{item.title}</h2>
      <span>${item.price}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button>Ver detalles</button>
      </NavLink>
    </div>
  )
}

export default Item
