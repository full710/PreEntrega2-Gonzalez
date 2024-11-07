import React from "react"
import Item from "./Item"
import "../styles/itemList.css"


const ItemList = ({ products }) => {
    return (
        <div className="listContainer">
            {products.map((product) => {
                return (
                    <Item item={product} key={product.id}/>
                )
            })}
        </div>
    )
}

export default ItemList
