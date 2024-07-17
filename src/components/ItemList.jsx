import React from 'react'
import Item from './Item'

const ItemList = ({items}) => { //recibe de objetos de productos.json
  return (
    <>
      {items.map(producto => (
        <Item key={producto.id} item={producto}/>
      ))}
    </>
  )
}

export default ItemList