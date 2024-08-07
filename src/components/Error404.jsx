import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col p-5'>
          <i className="fs-1 bi bi-bug"></i>
          <h1>Error 404</h1>
          <h2>La página solicitada no se encontró en el servidor.</h2>
          <Link to={"/"} ><button className='btn btn-dark' >Volver a la pagina de principal</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Error404