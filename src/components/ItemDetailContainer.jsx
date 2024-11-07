import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import '../styles/itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const docRef = doc(db, "products", id)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id })
                } else {
                    console.log('El documento no existe')
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [id])

    return loading ? (
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    ) : (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer

