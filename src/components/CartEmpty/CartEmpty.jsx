import { Link } from "react-router-dom";

const CartEmpty = () => {

    return (

        <div>
            <p className=" text-4xl font-bold mt-5">Oops!</p>
            <p className=" text-2xl font-bold my-1">¡Tu carrito está vacío!</p>
            <p className=" text-2xl font-bold mt-1 mb-4">¡Explora nuestra tienda para encontrar las mejores ofertas!</p>
            <Link className="buttonGhostGreen my-4" to="/">Volver a la Tienda</Link>
            
        </div>
    )
    
}

export default CartEmpty;