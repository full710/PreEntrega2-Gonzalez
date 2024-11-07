import React from 'react'
import '../styles/item.css'
import { NavLink } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className="item-container">
      <img src={item.image1} alt={item.title} className="item-image" />
      <h2 className="item-title">{item.title}</h2>
      <span className="item-price">${item.price}</span>
      <NavLink to={`/detail/${item.id}`} className="detail-link">
        <button className="detail-button">Ver detalles</button>
      </NavLink>
    </div>
  )
}

export default Item