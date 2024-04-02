import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Chip,
} from "@nextui-org/react";

const ItemDetail = ({id,model,brand,price,img,stock,description,category}) => {

  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const objProductToAdd = { id, brand, model, price, quantity };
    setQuantity(quantity);

    addItem(objProductToAdd);
  };

  

  return (
    <section className="flex justify-center">
      <Card className="shadow-lg shadow-indigo-700 py-3">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="flex flex-row justify-between w-96">
            <Chip variant="bordered" className="text-default-500">
              {brand}
            </Chip>
            <Chip
              color="success"
              variant="bordered"
              className="text-tiny uppercase font-bold"
            >
              {category}
            </Chip>
          </div>
          <h4 className="font-bold text-4xl self-center">{model}</h4>
        </CardHeader>
        <CardBody className="flex-col items-center overflow-visible py-2">
          <Image
            isBlurred
            isZoomed
            className="object-cover rounded-xl max-h-[400px]"
            src={img}
            width={400}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-center">
          <p className="text-default-500 w-96">{description}</p>
          <p className="text-2xl my-2">${price}</p>

          {quantity > 0 ? (
            <div className="flex flex-col items-center gap-1">
              <Link className="buttonGhostGreen text-green-600 text-center text-sm py-1 px-2" to="/cart">
                  Terminar Compra                
              </Link>
              <Link className="text-green-600 text-center text-sm py-1 px-2" to="/">
                  Seguir comprando            
              </Link>
          
            </div>
          ) : (
            stock > 0 ? (<ItemCount stock={stock} onAdd={handleOnAdd} />) : (<Chip variant="bordered" className="text-default-500"> Sin Stock </Chip>) 
          )}
        </CardFooter>
      </Card>
    </section>
  );
};

export default ItemDetail;
