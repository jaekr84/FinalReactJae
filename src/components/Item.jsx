import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
      <div className='col-md-3' >
        <div className='card border-1'>
          <Link to={"/item/" + item.id}>
          <img src={item.image} className='card-img-top' alt={item.title} />
          </Link>
          <div className='card-body'>
            <p className='card-text'>{item.title}</p>
            <p className='card-text'>${item.price}</p>
          </div>
        </div>
      </div>
  )
}

export default Item