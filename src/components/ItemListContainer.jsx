import React, { useState, useEffect } from 'react'
import '../styles/itemlistcontainer.css'
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        let productsFiltered = []
        if (categoryId) {
          const q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
          )
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() })
          })
        } else {
          const querySnapshot = await getDocs(collection(db, "products"))
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() })
          })
        }

        setProducts(productsFiltered)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })();
  }, [categoryId])

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div> 
        </div>
      ) : (
        <div className="itemsContainer">
          <ItemList products={products} /> 
        </div>
      )}
    </div>
  )
}

export default ItemListContainer
