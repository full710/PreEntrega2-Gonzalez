import { createContext, useState, useEffect } from "react"

// 1. Crear el contexto
export const Cart = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id)
        let cartUpdated = [...cart]
        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    }
                }
                return cartProduct
            })
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity })
        }
        
        setCart(cartUpdated)
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(cartProduct => cartProduct.id !== productId))
    }

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    // Actualiza la cantidad total cada vez que cambia el carrito
    useEffect(() => {
        const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
        setQuantity(totalQuantity)
    }, [cart])

    return (
        <Cart.Provider value={{ cart, addCart, removeFromCart, quantity }}>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider
