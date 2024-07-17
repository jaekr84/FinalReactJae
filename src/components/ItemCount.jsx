import React, { useEffect, useState } from "react"


const ItemCount = ({stock}) => {
  const [contador, setContador] = useState (1);
  const [itemstock, setItemstock] = useState(stock);
  
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

  const onAdd = () => {    
    if (contador <= itemstock){
      setItemstock(itemstock - contador) 
      setContador(1);
    };
  } 

  useEffect(() => {
    setItemstock(stock)
  },[stock])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-group my-2" role="group">
              <button type="button" className="btn btn-primary rounded-start-pill" onClick={decrementar}>-</button>
              <button type="button" className="btn btn-primary" >{contador}</button>
              <button type="button" className="btn btn-primary rounded-end-pill" onClick={incrementar}>+</button>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col">
          <button type="button" className="btn btn-dark rounded-pill" onClick={onAdd}>Agregar Carrito</button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
};

export default ItemCount