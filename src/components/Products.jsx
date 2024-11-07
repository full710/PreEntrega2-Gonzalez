import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/products.css'

const Products = () => {
  return (
    <div className="categoria-container">
      <div className="button-container">
        <NavLink className="button-products doble" to="/Products/category/doble">
          Almohadones Dobles
        </NavLink>
        <NavLink className="button-products simple" to="/Products/category/simple">
          Almohadones Simples
        </NavLink>
      </div>
    </div>
  )
}

export default Products