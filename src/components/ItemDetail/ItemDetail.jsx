import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Chip,
  Button
} from "@nextui-org/react";

const ItemDetail = ({
  model,
  brand,
  price,
  img,
  stock,
  description,
  category,
}) => {

const [quantityAdded, setQuantityAdded] = useState(0);

const handleOnAdd =(quantity)=> {
  setQuantityAdded(quantity)

}



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
            className="object-cover rounded-xl"
            src={img}
            width={400}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-center">
          <p className="text-default-500 w-96">{description}</p>
          <p className="text-2xl my-2">${price}</p>

          {
            quantityAdded > 0 ? ( 
           <div className="flex flex-col items-center gap-1">
             <Link to='/cart'>
                 <Button className="text-center text-sm" size="sm" color="success" variant="bordered">Terminar Compra</Button>
                 </Link>
                 <Button className="text-center text-sm" size="sm" color="danger" variant="light">cancelar compra</Button>
           </div>
                
                )
            :(

            <ItemCount stock={stock} onAdd={handleOnAdd}/> )

          }

          


        </CardFooter>
      </Card>
    </section>
  );
};

export default ItemDetail;
