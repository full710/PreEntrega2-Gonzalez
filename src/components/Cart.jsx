import React, { useContext } from "react"
import { Cart as CartContext } from "../context/CartProvider"
import CartItem from "./CartItem"
import { NavLink } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import '../styles/cart.css'

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext)
    console.log({ cart })

    const handlePurchase = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        const order = {
            buyer: {
                name: "Jhon",
                lastName: "Doe",
                email: "jhon"
            },
            products: cart,
            total,
            timestamp: serverTimestamp()
        }
            ; (async () => {
                try {
                    const docRef = await addDoc(collection(db, "orders"), order)
                    console.log("Document written with ID: ", docRef.id)
                } catch (error) {
                    console.log(error)
                }
            })()
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)


    return (
        <div className="cartContainer">
            {cart.length ? (
                <>
                    {cart.map((cartItem) => (
                        <CartItem
                            item={cartItem}
                            key={cartItem.id}
                            onDelete={() => removeFromCart(cartItem.id)}
                        />
                    ))}
                    <h2 className="cartTotalPrice">Total Price: ${totalPrice}</h2>
                    <button className="cartPurchaseButton" onClick={handlePurchase}>End purchase</button>
                </>
            ) : (
                <>
                    <h1 className="cartEmptyMessage">No hay productos en el cart</h1>
                    <NavLink to={"/"} className="cartHomeLink">Home</NavLink>
                </>
            )}
        </div>
    )
}


export default Cart
