import '../styles/itemDetail.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddItemButton from './AddItemButton'

const ItemDetail = ({ product }) => {
    const { nombre, categoria, descripcion, precio, imagenes } = product

    const [mainImage, setMainImage] = useState(imagenes[0])

    const handleImageClick = (image) => {
        setMainImage(image)
    };

    return (
        <div>
            <h1 className='productName'>{nombre}</h1>
            <div className='itemDetail'>
                <div className='imagesContainer'>
                    <div className='imgContainer'>
                        {imagenes.map((image, index) => (
                            <img
                                key={index}
                                className='imgThumbnail'
                                src={image}
                                alt={`${nombre} - ${index}`}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                    <div className='mainImageContainer'>
                        <img className='mainImage' src={mainImage} alt={nombre} />
                    </div>
                </div>
                <div className='productDescription'>
                    <div>
                        <h2>Categoría: {categoria}</h2>
                        {descripcion.map((desc, index) => (
                            <ul key={index}>
                                <li>
                                    <p>{desc}</p>
                                </li>
                            </ul>
                        ))}
                    </div>

                    <div className='productPrice'>
                        <h2>Precio: ${precio}</h2>
                    </div>
                    <AddItemButton/>
                </div>
            </div>
            <button>
                <Link to={'/Products'} >Volver a productos</Link>
            </button>
        </div>           
    )
}

export default ItemDetail

