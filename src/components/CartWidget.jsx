import React, { useContext } from 'react'
import '../styles/cartwidget.css'
import cart from '../assets/cart.svg'
import { Cart as CartContext } from '../context/CartProvider'

const CartWidget = () => {
  const { quantity } = useContext(CartContext)

  return (
    <div className='cart'>
      <img src={cart} alt="cart" />
      <span className='quantityCart'>({quantity})</span>
    </div>
  )
}

export default CartWidget