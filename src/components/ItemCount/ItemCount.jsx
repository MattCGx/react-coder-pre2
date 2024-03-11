import { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";


const ItemCount = ({initial = 1, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count >1) {
setCount(prev => prev-1)
        }
    }

    const increment = () => {
        if(count < stock) {
setCount(prev => prev+1)
        }
    }


  return (

    <ButtonGroup>
      <Button className="text-base" size="sm" color="danger" variant="bordered" onClick={decrement}>
        -
      </Button>
      <Button className="text-center text-sm" size="sm" color="primary" variant="bordered" onClick={()=>onAdd(count)} >
        Agregar al carrito ({count})
      </Button>
      <Button className="text-base" size="sm" color="success" variant="bordered" onClick={increment}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount
