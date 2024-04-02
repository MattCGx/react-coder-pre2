import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Input } from "@nextui-org/react";
import { query, collection, where, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore";
import { db } from "../../services/FirebaseDB/firebaseConfig.js"

const Checkout = () => {

    const [buyerName, setbuyerName] = useState("");
    const [buyerPhone, setbuyerPhone] = useState("");
    const [buyerEmail, setbuyerEmail] = useState("");
    const [buyerAdress, setbuyerAdress] = useState("");
    const { cart, totalPrice, eraseCart} = useContext(CartContext)

    const createOrder = async () => {
      try {
        const objOrder = {
            buyerData: {
                buyerName: buyerName,
                buyerPhone: buyerPhone,
                buyerEmail: buyerEmail,
                buyerAdress: buyerAdress
            },
            items: cart,
            total: totalPrice
        }

        const batch = writeBatch(db)
        const outOfStock = []
        const cartIds = cart.map(prod => prod.id) 

        const productsInCart = query(collection(db, "products"), where(documentId(), "in", cartIds))

        const querySnapshot = await getDocs(productsInCart)
        const { docs } = querySnapshot

        docs.forEach(doc => {

          const data = doc.data()
          const stockProductDB = data.stock

          const productIncart = cart.find(product => product.id === doc.id)
          const productIncartQuantity = productIncart.quantity

          if (stockProductDB >= productIncartQuantity ){
              batch.update(doc.ref, {stock: stockProductDB - productIncartQuantity})
          } else {
              outOfStock.push({id: doc.id, ... data})
          }
        })

        if (outOfStock.length === 0) {
           batch.commit()
           const orderCollection = collection(db, "orders")
           const { id } = await addDoc(orderCollection, objOrder)            
           alert(`se genero la orden ${id}`)
           eraseCart()
        }else {
            alert("hay productos sin stock")
        }

      }
      catch(error){
        alert("Oops! ocurrio un error al procesar la orden")
      }
    }





  return (
    
    <section className="grid place-content-center mt-5">
  <h1 className="text-2xl my-4">Ingresa tus datos para finalizar la orden de compra</h1>
  <div className="grid gap-4 w-auto">
    <Input
      label="Nombre y apellido"
      placeholder="Marcos Zuckerberg"
      value={buyerName}
      onValueChange={setbuyerName}
    />
    <Input
      label="Teléfono"
      placeholder="01112345678"
      value={buyerPhone}
      onValueChange={setbuyerPhone}
    />
    <Input
      label="Email"
      placeholder="marquitos@reptilianarmy.com"
      value={buyerEmail.toLowerCase()}
      onValueChange={setbuyerEmail}
    />
    <Input
      label="Dirección"
      placeholder="La Comarca 4329"
      value={buyerAdress}
      onValueChange={setbuyerAdress}
    />
  </div>

  <button className="buttonGhostGreen w-fit justify-self-center my-5" onClick={createOrder}>Generar orden de compra</button>
</section>
    
  );
};

export default Checkout;
