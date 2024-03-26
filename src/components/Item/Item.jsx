import { Card, CardFooter, CardBody, Image,} from "@nextui-org/react";
import { Link } from "react-router-dom";

const Item = ({id, model, brand, price, img}) => {
  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          isBlurred
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-[250px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="text-small justify-around">
        <b>
          {brand} - {model}
        </b>
      </CardFooter>
      <CardFooter className="text-small justify-around">
        <p className="text-default-500">${price}</p>
        <Link to={`/item/${id}`}>
        <button
            className="buttonGhostGreen text-tiny py-1 px-2"
          >Ver Detalle
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Item;

