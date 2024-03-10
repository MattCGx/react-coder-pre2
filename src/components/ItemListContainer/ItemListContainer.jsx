import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting, greetingFiltro }) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
      .then((result) => {
        setProducts(result);
    });
  }, [categoryId]);

  return (
    <main>
      <h1 className="text-center text-cyan-400 text-2xl">{!categoryId ? greeting:`${greetingFiltro}${categoryId}`}</h1>
      <ItemList products={products}/>
    </main>
  );
};

export default ItemListContainer;
