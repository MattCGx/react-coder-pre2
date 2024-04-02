import { Card, CardBody, Spacer, Spinner } from "@nextui-org/react";

export const CheckoutLoader = () => {
  return (
    <section className="grid place-content-center">
        <Spacer y={32} />
      <Card className=" w-fit shadow-md shadow-slate-400">
        <CardBody className="w-fit">
          <h1 className="text-5xl font-bold my-5"> Por favor espere...</h1>
          <Spinner color="secondary" size="lg" />
          <p className=" text-3xl font-bold my-4">
            Su orden está siendo generada.
          </p>
          
        </CardBody>
      </Card>
    </section>
  );
};
