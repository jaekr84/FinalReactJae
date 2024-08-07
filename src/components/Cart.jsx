import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, removeItem, clear, totalProducts, sumProducts} = useContext(CartContext)
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARG'}).format(price);
  };

  if (totalProducts() == 0) {
    return(
      
      <div className='container my-5'>
        <div className='row'>
          <div className='col'>
            <i className="fs-1 bi bi-bag"/>
            <h1>Tu carrito está vacío</h1>
            <h2>Explorar la tienda</h2>
            <Link to={'/'}> <button className='btn btn-dark'> Volver a la página principal </button> </Link>
          </div>
        </div>
      </div>

    )
  }



  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col'>
          <h1>Tu orden de compra</h1>
          <table className='table'>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className='align-middle'> <img src={item.image} alt={item.title} width={80} /> </td>
                  <td className='align-middle'> {item.title} </td>
                  <td className='align-middle'> {formatPrice(item.price)} x {item.quantity} </td>
                  <td className='align-middle'> {formatPrice(item.price * item.quantity)} </td>
                  <td className='align-middle'> <button className='btn btn-danger' width={32} onClick={()=>{removeItem(item.id)}} ><i className="bi bi-trash2-fill"> Eliminar</i></button> </td>
                </tr>
              ))}
              <tr>
                <td className='align-middle' colSpan={3}> <b> Total a Pagar </b></td>
                <td className='align-middle' >${formatPrice(sumProducts())}</td>
                <td className='align-middle'> <button className='btn btn-danger' width={32} onClick={clear} ><i className="bi bi-trash2-fill"> Vaciar Carrito</i></button> </td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
                <Link to="/checkout" className='btn btn-primary text-center align-middle' width={32}> Finalizar la compra </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart