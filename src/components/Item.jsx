import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
      <div className='col-md-3' >
        <div className='card border-1 m-1'>
          <Link to={"/item/" + item.id}>
          <img src={item.image} height={290} className='card-img-top object-fit-cover' alt={item.title} />
          </Link>
          <div className='card-body'>
            <p className='card-text'>{item.title}</p>
            <p className='card-text'>${item.price}</p>
            <Link to={"/item/" + item.id}> <button className='btn btn-dark'>Ver detalle</button></Link>
          </div>
        </div>
      </div>
  )
}

export default Item