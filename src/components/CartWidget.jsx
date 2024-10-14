import React from 'react'
import '../styles/cartwidget.css'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <div className='cart'>
        <img src={cart} alt="cart" />
        <span>(0)</span>    
    </div>
  )
}

export default CartWidget
