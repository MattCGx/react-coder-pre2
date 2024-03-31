import { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Card, CardBody} from "@nextui-org/react";


const Cart = ()=>{

    const { cart, eraseItem,eraseCart,totalPrice} = useContext(CartContext)

    return (
        <div>
            <section>
                <Card isBlurred className="w-full bg-slate-400 px-3 my-4">{
                    cart.map(product => {
                        return(
                           <div key={product.id} className="flex flex-col my-2">
                             <CardBody className="flex flex-row bg-slate-600 rounded-md w-3/4 align-middle justify-between">{product.brand} {product.model} | ${product.price} - {product.quantity} Unidades| Subtotal: ${product.quantity * product.price} <button className="buttonErase font-bold" onClick={()=>eraseItem(product.id)}> Eliminar</button></CardBody>
                           </div>
                        )
                    })
                }
                    
                </Card>
            </section>
            <Card className="my-4 px-3">
                <CardBody> TOTAL: ${totalPrice}</CardBody>
            </Card>
            <button className="buttonGhostRed mx-2" onClick={()=>eraseCart()}>Vaciar Carrito</button>
            <Link className="buttonGhostGreen mx-2" to= "/checkout"> Generar Orden</Link>
        </div>
    )
}



export default Cart;