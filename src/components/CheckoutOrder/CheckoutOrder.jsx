import { Card, CardBody, Spacer} from "@nextui-org/react";
import { Link } from "react-router-dom";

export const CheckoutOrder = ({id}) => {
  return (
    <section className="grid place-content-center">
        <Spacer y={32} />
      <Card className="w-fit shadow-md shadow-slate-400 py-4">
        <CardBody className="w-fit">
          <h1 className="place-self-center text-5xl font-bold my-5"> ¡Muchas Gracias!</h1>
          <p className=" text-3xl font-bold my-4">
            Su orden se generó bajo el ID: </p>
            <p className=" text-3xl font-bold my-4 text-violet-400">{id}</p>
        </CardBody>
        <Link to="/" className="buttonGhostGreen place-self-center w-fit"> Volver al inicio</Link>
      </Card>
    </section>
  );
};
