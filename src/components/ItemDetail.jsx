import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext'

const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item,quantity);
  }

  return (
    <>
      <div className="card m-3">
        <div className="row g-0">
          <div className="col-md-4">
        <img src={item.image} width={200} className="img-fluid rounded-start objetct-fit-cover" style={{objectFit: 'cover'}} alt={item.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-50 ">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">$ {item.price}</p>
            <p className="card-text"><small className="text-body-secondary">3 y 6 cuotas sin interes</small></p>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail