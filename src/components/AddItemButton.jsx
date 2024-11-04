import React from 'react'
import '../styles/addItemButton.css'

const AddItemButton = () => {
  return (
    <div className='container'>
        <div className='selectQuantityContainer'>
            <button className='selectQuantity'>-</button>
            <div>0</div>
            <button className='selectQuantity'>+</button>
        </div>
            <button className='addButton'>Añadir al carrito</button>
    </div>
  )
}

export default AddItemButton
