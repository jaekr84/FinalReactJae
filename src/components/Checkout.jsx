import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {

  const {cart, totalProducts, sumProducts, clear} = useContext(CartContext);
  const [nombre, setNombre] = useState ("");
  const [email, setEmail] = useState ("");
  const [telefono, setTelefono] = useState ("");
  const [orderId, setOrderId] = useState ("");
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARG'}).format(price);
  };


  const generarOrden =() => {
    if (nombre == "" || email == "" || telefono == "") {
      Swal.fire({title: "Es obligatorio completar todos los campos", icon:"warning"});
      return false;
    } Swal.fire({title: "Orden generada exitozamente", icon:"success"});
    
    const fecha = new Date();

    const order = {
      buyer:{name:nombre, phone:telefono, email:email},
      items:cart.map(item => ({id:item.id, title:item.title, price:item.price})),
      date:  `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
      total:sumProducts()
    }
    
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((response) => {
      setOrderId(response.id);
      clear()
    })

  }


  if (totalProducts() == 0 && orderId) { 
    return (
      <div className="row my-5">
      <div className="col text-center">
        {orderId ? <div className="alert alert-light p-5" role="alert" > 
          <i className="fs-1 bi bi-bag"/> 
          <h3>Gracias por tu compra</h3>
          <p>Tu número de compra es: <b>{orderId}</b></p>
        <Link to={'/'}><button className="btn btn-primary">Volver a la Pagina principal</button></Link>
        </div> : "" }
      </div>
    </div> 
    )
  }

  if (totalProducts() == 0) {
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
  } else {
    return (
      <div className='container my-5'>
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onInput={(e) => {setNombre(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onInput={(e) => {setEmail(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="telefono" value={telefono} onInput={(e) => {setTelefono(e.target.value)}}/>
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
                    <td className='align-middle'> {formatPrice(item.price)} x {item.quantity} </td>
                    <td className='align-middle'> {formatPrice(item.price * item.quantity)} </td>  
                  </tr>
                ))}
                <tr>
                  <td className='align-middle' colSpan={3}> <b> Total a Pagar </b></td>
                  <td className='align-middle' > {formatPrice(sumProducts())}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      )
    
  }

}

export default Checkout