import cart from "./assets/sh-cart.svg";
import { Badge } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () =>  {

const { totalQuantity } = useContext(CartContext)


  return ( 
      <Badge color="success" content={totalQuantity} isInvisible={totalQuantity > 0 ? false : true} size="lg" placement="bottom-left" variant="solid"> 
        <Link to="/cart" className="buttonCart justify-between text-center font-bold text-xl" >
          <img className="w-8" src={cart}/>
        </Link> 
      </Badge>
  );
}

export default CartWidget