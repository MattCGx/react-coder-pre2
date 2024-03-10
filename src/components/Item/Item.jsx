import { Card, CardFooter, CardBody, Image, Button } from "@nextui-org/react";
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
          <Button
            className="text-tiny text-white bg-black/20 hover:bg-green-800"
            variant="bordered"
            color="success"
            radius="lg"
            size="sm"
          >Ver Detalle
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Item;

