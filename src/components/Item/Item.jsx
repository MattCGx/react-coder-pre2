import { Card, CardFooter, CardBody, Image, Chip } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Item = ({ id, model, brand, price, img, stock }) => {
  return (
    <Card className="hover:shadow-slate-400 hover:shadow">
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
        {stock > 0 ? (
          <p className="text-default-500">${price}</p>
        ) : (
          <Chip variant="bordered" className="text-default-500">
            {" "}
            Sin Stock{" "}
          </Chip>
        )}
        <Link
          to={`/item/${id}`}
          className="buttonGhostGreen text-tiny py-1 px-2"
        >
          Ver Detalle
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Item;
