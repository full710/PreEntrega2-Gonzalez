import React, { useState, useEffect } from 'react'
import productsData from "../assets/productos.json"
import '../styles/itemlistcontainer.css'
import Item from './Item'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [product, setProduct] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const simulateApi = new Promise((resolve) => {
      setTimeout(()=>{
        let productsFiltered
        const products = productsData.productos
        if (categoryId) {
          productsFiltered = products.filter(product => product.categoria === categoryId)
        } else {
          productsFiltered = products
        }
        resolve(productsFiltered)
      },2000)
      
    })
    simulateApi
    .then((productsFiltered) => {
      setProduct(productsFiltered)
      setLoading(false)
    })
    .catch((error) => {
      console.log('Error al cargar los datos', error);
      setLoading(false)
    })
  }, [categoryId])
  if (loading){
    return <p>Cargando productos...</p>
  }
  return (
    <div>
      <div className='itemsContainer'>

        {product.map((prod) => {
          return (
            <Item item={prod} key={prod.id} />
          )
        }
        )}

      </div>
    </div>
  )
}

export default ItemListContainer