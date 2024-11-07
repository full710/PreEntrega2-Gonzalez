import React from "react"
import '../styles/cartItem.css'

const CartItem = ({ item, onDelete }) => {
    return (
        <div className="cartItem">
            <img src={item.image1} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={onDelete}>Eliminar</button>
        </div>
    )
}

export default CartItem
