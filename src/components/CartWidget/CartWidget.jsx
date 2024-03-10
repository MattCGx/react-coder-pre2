import {Button} from "@nextui-org/react";
import cart from "./assets/sh-cart.svg";


const CartWidget = ({cartCount}) =>  {
  return (
  
      <Button className="text-center text-xl" color="success" className="text-center font-bold" endContent={<img className="w-7" src={cart} />}>
        {cartCount}
      </Button> 
  );
}

export default CartWidget