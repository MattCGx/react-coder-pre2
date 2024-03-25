import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/FirebaseDB/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const {itemId} = useParams()

  useEffect(() => {
    const productDoc = doc(db, "products", itemId)

   getDoc(productDoc)
    .then(queryDocumentSnapshot => {
        const data = queryDocumentSnapshot.data();
        const porductAdapted = {id: queryDocumentSnapshot.id, ...data }

        setProduct(porductAdapted)
    })
    .catch()
  }, [itemId]);

  return (
    <main>
      <h1 className="text-center text-cyan-400 text-2xl">
        Detalle del Producto
      </h1>
        <ItemDetail {... product} />
    </main>
  );
};

export default ItemDetailContainer;
