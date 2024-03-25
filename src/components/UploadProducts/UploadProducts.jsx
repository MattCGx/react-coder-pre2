import { uploadProducts }  from './upProd'

const UploadProducts =() => {
  const handleUploadProducts = () => {
    uploadProducts();
  };

  return (
    <div>
      <button onClick={handleUploadProducts}>Subir productos</button>
    </div>
  );
}

export default UploadProducts;