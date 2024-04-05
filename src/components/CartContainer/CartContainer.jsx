import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import trash from "./assets/trash.svg";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, eraseItem, eraseCart, totalPrice } = useContext(CartContext);

  const confirmErase = (product) => {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar ${product.brand} ${product.model} del carrito?`,
      icon: "warning",
      color: "white",
      background: "#27272A",
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "buttonGhostGreen mx-2",
        cancelButton: "buttonGhostRed mx-2",
      },
      confirmButtonText: "Si",
      cancelButtonText: "No",
      cancelButtonColor: "green",
      confirmButtonColor: "red",
    }).then((resp) => {
      if (resp.isConfirmed) {
        Swal.fire({
          icon: "error",
          color: "red",
          background: "#27272AF7",
          title: "¡Producto Eliminado!",
          showConfirmButton: false,
          timer: 1000,
        });
        eraseItem(product.id);
      } else {
        Swal.fire({
          icon: "success",
          color: "green",
          background: "#27272AF7",
          title: "¡Producto no Eliminado!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const confirmEraseCart = () => {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar todos los productos del carrito?`,
      icon: "warning",
      color: "white",
      background: "#27272A",
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "buttonGhostGreen mx-2",
        cancelButton: "buttonGhostRed mx-2",
      },
      confirmButtonText: "Si",
      cancelButtonText: "No",
      cancelButtonColor: "green",
      confirmButtonColor: "red",
    }).then((resp) => {
      if (resp.isConfirmed) {
        Swal.fire({
          icon: "error",
          color: "red",
          background: "#27272AF7",
          title: "¡Productos eliminados!",
          showConfirmButton: false,
          timer: 1000,
        });
        eraseCart();
      } else {
        Swal.fire({
          icon: "success",
          color: "green",
          background: "#27272AF7",
          title: "¡Productos no eliminados!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  return (
    <section>
      <div>
        <Card isBlurred className="w-full bg-slate-400 px-3 py-3 my-4">
          {cart.map((product) => {
            return (
              <div key={product.id} className="flex flex-col my-2">
                <CardBody className="flex flex-row justify-between w-3/4 place-self-center cardItemCart py-2">
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
                      onClick={() => confirmErase(product)}
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
        <button
          className="buttonGhostRed mx-2"
          onClick={() => confirmEraseCart()}
        >
          Vaciar Carrito
        </button>
        <Link className="buttonGhostGreen mx-2" to="/checkout">
          Continuar al Checkout
        </Link>
      </section>
    </section>
  );
};

export default CartContainer;
