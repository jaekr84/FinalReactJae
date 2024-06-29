import React from 'react'
import CarWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LALA SHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catálogo
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Remeras</a></li>
            <li><a className="dropdown-item" href="#">Jeans</a></li>
            <li><a className="dropdown-item" href="#">Camperas</a></li>
            <li><a className="dropdown-item" href="#">Sweaters</a></li>
            <li><a className="dropdown-item" href="#">Vestidos</a></li>
            <li><a className="dropdown-item" href="#">Shorts</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Ver todo</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">Manifiesto</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>      
    </div>
  </div>
  <CarWidget />
</nav>
  )
}

export default NavBar