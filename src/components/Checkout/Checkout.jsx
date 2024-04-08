import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Input } from "@nextui-org/react";
import {
  query,
  collection,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../services/FirebaseDB/firebaseConfig.js";
import { CheckoutLoader } from "../CheckoutLoader/CheckoutLoader.jsx";
import { CheckoutOrder } from "../CheckoutOrder/CheckoutOrder.jsx";
import Swal from "sweetalert2";
import CheckoutOrderList from "../ChekoutOrderList/CheckoutOrderList.jsx"




const Checkout = () => {
  const [buyerName, setbuyerName] = useState("");
  const [buyerPhone, setbuyerPhone] = useState("");
  const [buyerAdress, setbuyerAdress] = useState("");
  const [buyerEmail, setbuyerEmail] = useState("");
  const [buyerEmail2, setbuyerEmail2] = useState("");
  


  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, eraseCart } = useContext(CartContext);

  const checkOrder = () => {
    if (buyerName && buyerPhone && buyerEmail && buyerAdress && buyerEmail2 === buyerEmail) {
      createOrder();
    } else {
      Swal.fire({
        title: `¡Debes completar todos los datos de contacto correctamente antes de continuar!`,
        icon: "error",
        color: "red",
        background: "#27272A",
      });
    }
  };


  const createOrder = async () => {
    try {
      setLoading(true);
      const objOrder = {
        date: Timestamp.fromDate(new Date()),
        buyerData: {
          buyerName: buyerName,
          buyerPhone: buyerPhone,
          buyerEmail: buyerEmail,
          buyerAdress: buyerAdress,
        },
        items: cart,
        total: totalPrice,
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const cartIds = cart.map((prod) => prod.id);

      const productsInCart = query(
        collection(db, "products"),
        where(documentId(), "in", cartIds)
      );

      const querySnapshot = await getDocs(productsInCart);
      const { docs } = querySnapshot;

      docs.forEach((doc) => {
        const data = doc.data();
        const stockProductDB = data.stock;

        const productIncart = cart.find((product) => product.id === doc.id);
        const productIncartQuantity = productIncart.quantity;

        if (stockProductDB >= productIncartQuantity) {
          batch.update(doc.ref, {
            stock: stockProductDB - productIncartQuantity,
          });
        } else {
          outOfStock.push({ id: doc.id, ...data });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();
        const orderCollection = collection(db, "orders");
        const { id } = await addDoc(orderCollection, objOrder);
        Swal.fire(
          {
        title: `Orden Exitosa!`,
        toast: "true",
        icon: "success",
        position: "top-end",
        showConfirmButton: false,
        color: "white",
        background: "#27272A",
        timer:1500,
          });
        eraseCart();
        setOrderId(id);
      } else {
        Swal.fire(
          {
        title: `¡Oh no!
        ¡Tu orden no pudo completarse debido a que hay productos fuera de stock en tu carrito!`,
        icon: "error",
        color: "white",
        showConfirmButton: false,
        timer: 2000,
        background: "#27272A",
          });
      }
    } catch (error) {
      Swal.fire(
        {
      title: `Oops! Ocurrió un error inesperado`,
      toast: "true",
      icon: "error",
      position: "bottom-end",
      showConfirmButton: false,
      color: "red",
      background: "#27272A",
      timer:1000,
        });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CheckoutLoader />;
  }

  if (orderId) {
    return <CheckoutOrder id={orderId} />;
  }

  return (
    <section className="grid place-content-center mt-5">
      <h1 className="text-2xl my-4"> RESUMEN DE TU ORDEN</h1>
      <CheckoutOrderList/>
      <h2 className="text-2xl my-4">
        Ingresa tus datos para finalizar la orden de compra
      </h2>
      <div className="grid place-self-center gap-4 w-3/4">
        <Input
          isRequired
          isClearable
          label="Nombre y apellido"
          value={buyerName}
          onValueChange={setbuyerName}
        />
        <Input
          isRequired
          isClearable
          label="Teléfono"
          value={buyerPhone}
          onValueChange={setbuyerPhone}
        />
        <Input
          isRequired
          isClearable
          label="Dirección"
          value={buyerAdress}
          onValueChange={setbuyerAdress}
        />
        <Input
          isRequired
          isClearable
          isInvalid = {!buyerEmail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)}
          errorMessage= {!buyerEmail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) && "Por favor ingrese un email válido" }
          label="Email"
          value={buyerEmail.toLowerCase()}
          onValueChange={setbuyerEmail}
        />
        <Input
          isRequired
          isClearable
          isInvalid = {buyerEmail === buyerEmail2 ? "false" : "true"}
          errorMessage={buyerEmail === buyerEmail2 ? null:"Las direcciones de correo electrónico no coinciden"}
          color={buyerEmail === buyerEmail2 ? "success" : "danger"}
          label="Repite tu Email"
          value={buyerEmail2.toLowerCase()}
          onValueChange={setbuyerEmail2}
        />
        
      </div>

      <button
        className="buttonGhostGreen w-fit justify-self-center my-5"
        onClick={() => checkOrder()}
      >
        Generar orden de compra
      </button>

      
    </section>
  );
};

export default Checkout;
