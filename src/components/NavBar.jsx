import React from 'react'
import CarWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand">LALA SHOP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={"category/Ropa"} className="nav-link active">Ropa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"category/Accesorios"} className="nav-link active">Accesorios</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <CarWidget />
</nav>
  )
}

export default NavBar