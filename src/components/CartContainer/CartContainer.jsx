import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import trash from "./assets/trash.svg";

const CartContainer = () => {
  const { cart, eraseItem, eraseCart, totalPrice } = useContext(CartContext);

  return(
  <section>
    <div>
      <Card isBlurred className="w-full bg-slate-400 px-3 py-3 my-4">
        {cart.map((product) => {
          return (
            <div key={product.id} className="flex flex-col my-2">
              <CardBody className="flex flex-row justify-between w-3/4 cardItemCart py-2">
                <p>
                  {product.brand} {product.model}
                </p>
                <p>
                  Precio Unitario: <Chip>${product.price}</Chip> - Cantidad:
                  <Chip> {product.quantity} Unidades</Chip>
                </p>
                <p>
                  Subtotal: <Chip>${product.quantity * product.price}</Chip>
                </p>
                <Tooltip
                  delay={1000}
                  closeDelay={0}
                  showArrow={true}
                  color="danger"
                  placement="right-end"
                  content="Eliminar Producto"
                >
                  <button
                    className="buttonErase font-bold"
                    onClick={() => eraseItem(product.id)}
                  >
                    <img src={trash} />
                  </button>
                </Tooltip>
              </CardBody>
            </div>
          );
        })}
      </Card>
    </div>
    <section>
      <Card className="px-3 my-4">
        <CardBody className=" flex flex-row justify-center text-3xl">
          TOTAL: ${totalPrice}
        </CardBody>
      </Card>
      <button className="buttonGhostRed mx-2" onClick={() => eraseCart()}>
        Vaciar Carrito
      </button>
      <Link className="buttonGhostGreen mx-2" to="/checkout">
        Continuar al Checkout
      </Link>
    </section>
  </section>
  )
};

export default CartContainer;