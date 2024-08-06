import React, { useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom'



const ItemCount = ({stock, onAdd}) => {
  const [contador, setContador] = useState (1);
  const [itemstock, setItemstock] = useState(stock);
  const [visible, setVisible] = useState (true);
  
  const incrementar = () => {    
    if (contador < itemstock) {
      setContador(contador + 1);
    }
  } 
  const decrementar = () => {    
    if (contador > 1) {
      setContador(contador - 1);
    }
  } 

  const addToCart = () => {    
    if (contador <= itemstock){
      setItemstock(itemstock - contador) 
      onAdd(contador)
      setContador(1);
      setVisible(false);
      console.log("Agregaste " + contador + " productos al carrito!")
    };
  } 

  useEffect(() => {
    setItemstock(stock)
  },[stock])

  return (
    <>
      {visible ? 
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-group my-2" role="group">
              <button type="button" className="btn btn-dark rounded-start-pill" onClick={decrementar}>-</button>
              <button type="button" className="btn btn-dark" >{contador}</button>
              <button type="button" className="btn btn-dark rounded-end-pill" onClick={incrementar}>+</button>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col">
          <button type="button" className="btn btn-dark rounded-pill" onClick={addToCart}>Agregar Carrito</button>
          </div>
        </div>
      </div> : <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to={"/cart"} className="btn btn-dark rounded-pill m-3"> Terminar la compra </Link>
                      <Link to={"/"} className="btn btn-dark rounded-pill "> Seguir comprando </Link>
                    </div>
                  </div>
                </div>  }
    </>
  )
};

export default ItemCount