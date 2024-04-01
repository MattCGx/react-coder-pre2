import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Input } from "@nextui-org/react";

const Checkout = () => {

    const [buyerName, setbuyerName] = useState("");
    const [buyerPhone, setbuyerPhone] = useState("");
    const [buyerEmail, setbuyerEmail] = useState("");
    const [buyerAdress, setbuyerAdress] = useState("");
    const { cart, totalPrice} = useContext(CartContext)

    const createOrder = () => {
        const objOrder = {
            buyerData: {
                buyerName: buyerName,
                buyerPhone: buyerPhone,
                buyerEmail: buyerEmail,
                buyerAdress: buyerAdress
            },
            items: cart,
            total: totalPrice,
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
