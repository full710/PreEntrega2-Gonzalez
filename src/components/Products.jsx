import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/products.css'

const Products = () => {
  return (
    <div className='categoriaContainer'>
        <button className='buttonProducts'>
            <NavLink className='doble' to="/Products/category/doble">Almohadónes dobles</NavLink>
        </button>
        <button className='buttonProducts'>
            <NavLink className='simple' to="/Products/category/simple">Almohadónes simples</NavLink>
        </button>
    </div>
  )
}

export default Products