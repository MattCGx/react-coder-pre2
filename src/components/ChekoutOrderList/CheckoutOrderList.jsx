import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card, CardBody, CardFooter, Chip, Spacer } from "@nextui-org/react";

const CheckoutOrderList = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <section>
      <Card className="w-full bg-slate-400 px-3 py-3 my-4 hover:shadow-md hover:shadow-slate-400">
        {cart.map((product) => {
          return (
            <div key={product.id} className="flex flex-col my-2">
              <CardBody className="flex flex-row columns-3 place-self-center cardItemCart py-2">
                <p>
                  {product.brand} {product.model}
                </p>
                <Spacer x={10} />
                <p>
                  Precio Unitario: <Chip>${product.price}</Chip> - Cantidad:
                  <Chip> {product.quantity} Unidades</Chip>
                </p>
                <Spacer x={10} />
                <p>
                  Subtotal: <Chip>${product.quantity * product.price}</Chip>
                </p>
              </CardBody>
            </div>
          );
        })}
        <CardFooter className="flex flex-row place-self-center cardItemCart bg-violet-400 text-slate-600 text-2xl font-bold py-2">
          TOTAL: ${totalPrice}
        </CardFooter>
      </Card>
    </section>
  );
};

export default CheckoutOrderList;
