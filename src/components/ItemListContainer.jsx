import React, { useEffect, useState } from 'react'
import arrayProductos from "../Json/Productos.json"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
      },  2000)
    })

    promesa.then(response => {
      setItems(response)
    })
  },[id])
  return (
    <div className='container'>
      <div className='row'>
        <ItemList items={items}/>
      </div>
    </div>
  )
}

export default ItemListContainer  