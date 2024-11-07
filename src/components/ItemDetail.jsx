import React, { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import { Cart } from "../context/CartProvider"
import { NavLink } from "react-router-dom"
import '../styles/itemDetail.css'

const ItemDetail = ({ product }) => {
    const { addCart } = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)
    const [mainImage, setMainImage] = useState(product.image1)  // Inicializamos con image1

    // Cambia la imagen principal al hacer clic en una miniatura
    const handleImageClick = (image) => {
        setMainImage(image)
    }

    const handleCart = (quantity) => {
        setItemCountVisibility(false)
        addCart(product, quantity)
    }

    return (
        <div>

            <h1 className='productName'>{product.title}</h1>
            <div className="itemDetail">
                <div className='imagesContainer'>
                    <div className='imgContainer'>
                        <img
                            className='imgThumbnail'
                            src={product.image1}
                            alt={`${product.title} - Image 1`}
                            onClick={() => handleImageClick(product.image1)}
                            style={{ cursor: 'pointer', border: mainImage === product.image1 ? '2px solid #000' : '' }}
                        />
                        <img
                            className='imgThumbnail'
                            src={product.image2}
                            alt={`${product.title} - Image 2`}
                            onClick={() => handleImageClick(product.image2)}
                            style={{ cursor: 'pointer', border: mainImage === product.image2 ? '2px solid #000' : '' }}
                        />
                    </div>
                    <div className='mainImageContainer'>
                        <img className='mainImage' src={mainImage} alt={product.title} />
                    </div>
                </div>

                <div className='productDescription'>
                    <div>
                        <h2>Categoría: {product.category}</h2>
                        <p>{product.description}</p>
                    </div>

                    <div className='productPrice'>
                        <h2>Precio: ${product.price}</h2>
                    </div>
                    {itemCountVisibility ? (
                        <ItemCount addCart={handleCart} stock={product.stock} />
                    ) : (
                        <div className="backProducts">
                            <button>
                                <NavLink className="no-underline" to={'/cart'}>Ir al carrito</NavLink>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="backProducts">
                <button>
                    <NavLink to={'/Products'} className='no-underline'><p>Volver a productos</p></NavLink>
                </button>
            </div>
        </div>
    )
}

export default ItemDetail
