import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {addDoc, getDocs, collection, query, where, getFirestore} from "firebase/firestore"

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    getDocs(q).then(snapShot => {
        if (snapShot.size > 0) {
            setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
        } else {
            console.error("Error! No existe la Colección 'items'!");
        }
    })
}, [id])



  return (
    <div className='container'>
      <div className='row'>
        <ItemList items={items}/>
      </div>
    </div>
  )
}

export default ItemListContainer  