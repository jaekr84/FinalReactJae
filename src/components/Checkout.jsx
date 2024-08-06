import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"

const Checkout = () => {

  const {cart, totalProducts, sumProducts} = useContext(CartContext);
  const [nombre, setNombre] = useState ("");
  const [email, setEmail] = useState ("");
  const [telefono, setTelefono] = useState ("");

  const generarOrden =() => {
    if (nombre == "" || email == "" || telefono == "") {
      alert("Por favor completa todos los campos")
      return false;
    }
    
    const order = {
      buyer:{name: nombre, phone: telefono, email: email},
      items:cart.map(item => ({id: item.id, title: item.title, price: item.price})),
      total:sumProducts()
    }
    console.log(order);
  }


  if (totalProducts() == 0 ) { 
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col'>
            <i className="fs-1 bi bi-bag"/>
            <h1>Tu carrito está vacío</h1>
            <h2>Explorar la tienda</h2>
            <Link to={'/'}> <button className='btn btn-dark'> Volver a la página principal </button> </Link>
          </div>
        </div>
      </div>    )
  }

  return (
  <div className='container my-5'>
    <div className="row">
      <div className="col">
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" onInput={(e) => {setEmail(e.target.value)}} >Email</label>
            <input type="email" className="form-control"/>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label" onInput={(e) => {setTelefono(e.target.value)}} >Teléfono</label>
            <input type="number" className="form-control"/>
          </div>
          <button type="button" className="btn btn-warning" onClick={generarOrden} >Finalizar oden de compra</button>
        </form>
      </div>
    
      <div className='col'>
        <h1>Tu orden de compra</h1>
        <table className='table'>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td className='align-middle'> <img src={item.image} alt={item.title} width={60} /> </td>
                <td className='align-middle'> {item.title} </td>
                <td className='align-middle'> $ {item.price} x {item.quantity} </td>
                <td className='align-middle'> $ {item.price * item.quantity} </td>  
              </tr>
            ))}
            <tr>
              <td className='align-middle' colSpan={3}> <b> Total a Pagar </b></td>
              <td className='align-middle' >$ {sumProducts()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


  )
}

export default Checkout