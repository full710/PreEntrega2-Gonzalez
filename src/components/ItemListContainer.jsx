import React, { useState, useEffect } from 'react'
import '../styles/itemlistcontainer.css'
import { useParams } from "react-router-dom"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import Item from './Item'
import ItemList from './ItemList'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    (async() =>{
      let productsFiltered = []

      const querySnapshot = await getDocs(collection(db, "products"))
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        productsFiltered.push({id: doc.id, ...doc.data()})
      })
      setProducts(productsFiltered)

    })()
  }, [categoryId])
  return (
    <div>
      <div className='itemsContainer'>
        <ItemList products={products} />
      </div>
    </div>
  )
}

export default ItemListContainer