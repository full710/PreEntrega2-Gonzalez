import React, { useEffect, useState } from "react"
import products from "../assets/productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const simulateApi = new Promise((resolve) => {
            setTimeout(() =>{
                const productData = products.productos
                const selectProduct = productData.find(product => product.id === parseInt(id))
                resolve(selectProduct)
            },2000)
        })
        simulateApi
        .then((selectProduct)=>{
            setProduct(selectProduct)
            setLoading(false)
        })
        .catch((error)=>{
            console.log('Error al cargar los datos',error);
            setLoading(false)
        })
    }, [id])

    if (loading) {
        return <p>Cargando producto...</p>
    }

    return <ItemDetail product={product} />
}

export default ItemDetailContainer
