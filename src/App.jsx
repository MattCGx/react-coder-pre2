import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido a MCGX 3D"} />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer greetingFiltro={"Productos en la categoria: "} />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
