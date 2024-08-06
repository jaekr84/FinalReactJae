import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [item, setItem] = useState ({});
  const {id} = useParams();


  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then(snapShot => {
      if (snapShot.exists()) {
        setItem({id:snapShot.id, ...snapShot.data()})
      } else {
        console.log("Error, no existe el documento")
      }
    })
  },[id])

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer  