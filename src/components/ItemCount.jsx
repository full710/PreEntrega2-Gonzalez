import React, { useState } from "react"
import '../styles/itemCount.css'

const ItemCount = ({ addCart, stock }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="container">
      {stock === 0 ? (
        <div className="outOfStockMessage">Sin stock</div>
      ) : (
        <div className="selectQuantityContainer">
          <button className="selectQuantity" onClick={decrement}>-</button>
          <span className="quantityDisplay">{count}</span>
          <button className="selectQuantity" onClick={increment}>+</button>
        </div>
      )}
      <button 
        className="addButton" 
        onClick={() => addCart(count)} 
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  )
}

export default ItemCount
