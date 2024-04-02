import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartContainer from "../CartContainer/CartContainer";
import CartEmpty from "../CartEmpty/CartEmpty";



const Cart = () => {
  const {cart} = useContext(CartContext);

  return (
    <div>
     {
     cart.length > 0 ? <CartContainer/> : <CartEmpty/>
     }
    </div>
  );
};

export default Cart;
