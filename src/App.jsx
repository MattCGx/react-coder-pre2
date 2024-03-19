import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./context/CartContext";
import "./App.css";



const App = () => {


  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido a MCGX 3D"} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greetingFiltro={"Productos en la categoria: "} />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          {/*<Route path="/cart" element={<Cart />}/>*/}
        </Routes>
      </BrowserRouter>
    </CartProvider>
     
    </>
  );
}

export default App;
