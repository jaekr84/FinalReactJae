import React, { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalProducts} = useContext(CartContext);

  if (totalProducts() > 0) {
      return (
        <Link to={"/cart"}>
          <div className="car-widget d-inline-flex align-items-center">
            <button type="button" className="btn btn-light position-relative">
              <i className="fs-4 bi bi-bag"> </i>
              <span className="position-absolute top-50 start-70 translate-middle badge rounded-pill bg-danger" >{totalProducts()}</span>
            </button>
          </div>
        </Link>
      )
    }
  }


export default CartWidget