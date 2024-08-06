import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from "./components/context/CartContext"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Error404 from "./components/Error404"

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/checkout"} element={<Checkout/>}/>
          <Route path={"/error404"} element={<Error404/>}/>
        </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
