import cart from "./assets/sh-cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () =>  {

const { totalQuantity } = useContext(CartContext)

  return ( 
    <Link to="/cart">
      <button  className="buttonCart justify-between text-center font-bold text-xl" >
        {totalQuantity}
        <img className="w-7" src={cart}/>
      </button> 
      </Link> 
  );
}

export default CartWidget