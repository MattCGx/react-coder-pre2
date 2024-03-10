import Item from '../Item/Item'

const ItemList = ({ products }) => {
  return (
    <section className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-3 px-3 pb-4">
      {products.map((product) => {
        return <Item key={product.id} {...product}/>;
      })}
    </section>
  );
};

export default ItemList;
