
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import "./App.css";



const App = () => {


  return (
    <>
    <BrowserRouter>
      <CartProvider>      
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido a MCGX 3D"} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greetingFiltro={"Productos en la categoria: "} />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>      
      </CartProvider>
    </BrowserRouter>
     
    </>
  );
}

export default App;
