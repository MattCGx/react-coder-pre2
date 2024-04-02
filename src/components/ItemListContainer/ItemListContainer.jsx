import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { ItemListSkeleton } from "../skeletons/ItemListSkeleton";
import { Spacer } from "@nextui-org/react";
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../services/FirebaseDB/firebaseConfig";


const ItemListContainer = ({ greeting, greetingFiltro }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {

      const productCollection = categoryId ? query(collection(db, "products"), where("category", "==", categoryId) ) : collection(db, "products")

    getDocs(productCollection)
        .then(querySnapshot =>{
         const productsAdatpted = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
         })
         setProducts(productsAdatpted)
        })
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
  
  }, [categoryId]);

  if(loading) {
    return <ItemListSkeleton/>
  }

  return (
    <main>
      <h1 className="text-center text-cyan-400 text-4xl pt-4 uppercase">{!categoryId ? greeting:`${greetingFiltro}${categoryId}`}</h1>
      <Spacer y={22}/>
      <ItemList products={products}/>
    </main>
  );
};

export default ItemListContainer;
