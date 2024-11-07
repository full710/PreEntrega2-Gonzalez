import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const docRef = doc(db, "products", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({ ...docSnap.data(), id });
                } else {
                    console.log('El documento no existe');
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return product ? <ItemDetail product={product} /> : <div>Loading...</div>;
};

export default ItemDetailContainer;
