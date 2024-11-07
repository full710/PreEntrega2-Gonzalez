import React, { useContext, useState } from "react"
import { Cart as CartContext } from "../context/CartProvider"
import { NavLink } from "react-router-dom"
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import CartItem from "./CartItem"
import '../styles/cart.css'

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext)
    const [buyerData, setBuyerData] = useState({
        name: "Jhon",
        lastName: "Doe",
        email: "jhon@example.com",
    })
    const [showCheckout, setShowCheckout] = useState(false)
    const [loading, setLoading] = useState(false)

    
    const updateStock = async (productId, quantityToReduce) => {
        const productRef = doc(db, "products", productId);
        try {
            const productDoc = await getDoc(productRef);
            if (productDoc.exists()) {
                const currentStock = productDoc.data().stock;
                const newStock = currentStock - quantityToReduce;

                if (newStock >= 0) {
                    await updateDoc(productRef, { stock: newStock });
                } else {
                    console.log("Stock insuficiente para el producto", productId);
                }
            }
        } catch (error) {
            console.log("Error al actualizar el stock:", error);
        }
    };

    const handlePurchase = async () => {
        setLoading(true)

        const total = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        )
        const order = {
            buyer: buyerData,
            products: cart,
            total,
            timestamp: serverTimestamp(),
        }

        try {
        
            const docRef = await addDoc(collection(db, "orders"), order)
            console.log("Document written with ID: ", docRef.id)

            clearCart()

            const invoiceWindow = window.open("", "_blank")
            invoiceWindow.document.write(`
                <html>
                    <head>
                        <title>Invoice - Order ${docRef.id}</title>
                        <style>
                            body { font-family: Arial, sans-serif; margin: 20px; }
                            h1 { color: #333; }
                            .invoice-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                            .invoice-table th, .invoice-table td { padding: 10px; border: 1px solid #ccc; }
                            .invoice-table th { background-color: #f4f4f4; }
                            .total-row td { font-weight: bold; background-color: #f4f4f4; }
                        </style>
                    </head>
                    <body>
                        <h1>Invoice - Order ${docRef.id}</h1>
                        <h3>Buyer: ${buyerData.name} ${buyerData.lastName}</h3>
                        <h3>Email: ${buyerData.email}</h3>
                        <h3>Total: $${total}</h3>
                        <table class="invoice-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${cart
                                    .map(
                                        (item) => `
                                            <tr>
                                                <td>${item.title}</td>
                                                <td>$${item.price}</td>
                                                <td>${item.quantity}</td>
                                                <td>$${item.price * item.quantity}</td>
                                            </tr>
                                        `
                                    )
                                    .join("")}
                                <!-- Total row -->
                                <tr class="total-row">
                                    <td colspan="3" style="text-align: right;">Total Price</td>
                                    <td>$${total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </body>
                </html>

            `)
            invoiceWindow.document.close()

            setTimeout(() => {
                window.location.href = "/"
            }, 500)


            for (const item of cart) {
                await updateStock(item.id, item.quantity)
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBuyerData({
            ...buyerData,
            [name]: value,
        })
    }

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
                    <h2 className="cartTotalPrice">Precio Total: ${totalPrice}</h2>

                    <button
                        className="cartPurchaseButton"
                        onClick={() => setShowCheckout(true)}
                    >
                        Finalizar Compra
                    </button>


                    {showCheckout && (
                        <div className="checkoutModal">
                            <div className="checkoutModalContent">
                                <h3>Ingrese sus datos para finalizar la compra</h3>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        handlePurchase()
                                    }}
                                >
                                    <div className="formGroup">
                                        <label htmlFor="name">Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={buyerData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="formGroup">
                                        <label htmlFor="lastName">Apellido</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={buyerData.lastName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="formGroup">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={buyerData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="formActions">
                                        <button type="submit" disabled={loading}>
                                            {loading ? "Procesando..." : "Confirmar Compra"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowCheckout(false)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <h1 className="cartEmptyMessage">No hay productos en el carrito</h1>
                    <NavLink to={"/"} className="cartHomeLink">
                        Home
                    </NavLink>
                </>
            )}
        </div>
    )
}

export default Cart
