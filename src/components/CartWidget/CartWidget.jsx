import {Button} from "@nextui-org/react";
import cart from "./assets/sh-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () =>  {

const { totalQuantity } = useContext(CartContext)

  return (  
      <Button color="success" className="text-center font-bold text-xl" endContent={<img className="w-7" src={cart} />}>
        {totalQuantity}
      </Button> 
  );
}

export default CartWidget