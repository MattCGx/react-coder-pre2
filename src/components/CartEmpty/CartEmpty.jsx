import { Card, CardBody, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";

const CartEmpty = () => {

    return (

        <section className="grid place-content-center">
            <Spacer y={32}/>
            <Card className="w-fit p-2 shadow shadow-slate-400">
                <CardBody className="w-fit p-1"> 
                    <p className="text-4xl font-bold mt-5">¡Oops..!</p>
                    <p className="text-2xl font-bold my-1">¡Tu carrito está vacío!</p>
                    <p className="text-2xl font-bold mt-1 mb-4">¡Explora nuestra tienda para encontrar las mejores ofertas!</p>
                    <Link className="buttonGhostGreen place-self-center my-5 w-fit" to="/">Volver a la Tienda</Link>
                </CardBody>
                
            </Card>
            
        </section>
    )
    
}

export default CartEmpty;