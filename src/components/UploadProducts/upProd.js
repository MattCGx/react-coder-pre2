import { 
  collection,
  addDoc,
} from 'firebase/firestore'
import { db } from '../../services/FirebaseDB/firebaseConfig';



const products = [
   {
    brand: "Creality",
    model: "Ender 3 S1",
    category: "Impresoras",
    price: 440990,
    stock: 15,
    img: "https://printalot.com.ar/media/2023/07/KFDMEND00023_1.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 220x220x270mm, cama caliente, doble eje Z, pantalla táctil.",
  },
  {
    brand: "Creality",
    model: "Ender 5 Plus",
    category: "Impresoras",
    price: 590990,
    stock: 15,
    img: "https://www.megatone.net/images//Articulos/zoom2x/275/MKT0009RST-1.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 350x350x400mm, cama caliente, doble eje Z, extrusión directa.",
  },
  {
    brand: "Artillery",
    model: "Genius Pro",
    category: "Impresoras",
    price: 440990,
    stock: 15,
    img: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_116273814_1425808_2?wid=800&hei=800&qlt=70",
    description:
      "Impresora 3D FDM, volumen de impresión 220x220x250mm, cama caliente, autoleveling, extrusor Titan.",
  },
  {
    brand: "Artillery",
    model: "Sidewinder X2",
    category: "Impresoras",
    price: 540990,
    stock: 15,
    img: "https://printalot.com.ar/media/2023/02/swx2_01-400x400.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 300x300x400mm, cama caliente, doble eje Z, extrusión directa.",
  },
  {
    brand: "Anycubic",
    model: "Mega X",
    category: "Impresoras",
    price: 490990,
    stock: 15,
    img: "https://cdn3.botland.store/86718-large_default/3d-printer-anycubic-mega-x.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 210x210x205mm, cama caliente, autoleveling, extrusor Titan.",
  },
  {
    brand: "Anycubic",
    model: "Vyper",
    category: "Impresoras",
    price: 640990,
    stock: 15,
    img: "https://m.media-amazon.com/images/I/71ZBIcRm4cL.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 245x245x260mm, cama caliente, autoleveling, extrusor Volcano, alta velocidad.",
  },
  {
    brand: "Prusa Research",
    model: "Original Prusa i3 MK3S+",
    category: "Impresoras",
    price: 1149990,
    stock: 8,
    img: "https://www.prusa3d.com/content/images/product/original/0fe396e1-9c40-4dea-8986-7e9b405312ec.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 250x210x210mm, cama magnética MK52, autoleveling SuperPINDA, sensor de filamento, electrónica Einsy Rambo 2.0.",
  },
  {
    brand: "Prusa Research",
    model: "Prusa Mini+",
    category: "Impresoras",
    price: 649990,
    stock: 10,
    img: "https://http2.mlstatic.com/D_NQ_NP_725430-MLA47969227903_102021-O.webp",
    description:
      "Impresora 3D FDM, volumen de impresión 180x180x250mm, cama magnética, autoleveling, sensor de filamento.",
  },
  {
    brand: "Elegoo",
    model: "Neptune 3 Pro",
    category: "Impresoras",
    price: 440990,
    stock: 20,
    img: "https://store.3ding.in/cdn/shop/files/elegoo-neptune-3-plus-3d-printer-111-64be6b45a98e6_1200x1200.webp?v=1691139754",
    description:
      "Impresora 3D FDM, volumen de impresión 220x220x280mm, cama caliente, autoleveling, extrusor Titan.",
  },
  {
    brand: "Elegoo",
    model: "Mars 3 Pro",
    category: "Impresoras",
    price: 349990,
    stock: 25,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvcZet1JCBO4aIComHaevr2PyTpexSxBqbg&usqp=CAU",
    description:
      "Impresora 3D MSLA, volumen de impresión 143x90x165mm, alta velocidad, precisión y calidad de impresión.",
  },
  {
    brand: "Anycubic",
    model: "Photon Mono X",
    category: "Impresoras",
    price: 449990,
    stock: 15,
    img: "https://wwwhatsnew.com/wp-content/uploads/2021/07/Anycubic.jpeg",
    description:
      "Impresora 3D MSLA, volumen de impresión 192x120x245mm, alta velocidad, precisión y calidad de impresión.",
  },
  {
    brand: "Creality",
    model: "Halot One",
    category: "Impresoras",
    price: 399990,
    stock: 15,
    img: "https://proyectocolor.com.ar/wp-content/uploads/2022/11/HALOTONE_PRINCIPAL-1.jpg",
    description:
      "Impresora 3D MSLA, volumen de impresión 192x120x250mm, alta velocidad, precisión y calidad de impresión.",
  },
  {
    brand: "Flashforge",
    model: "Adventurer 3 Lite",
    category: "Impresoras",
    price: 340990,
    stock: 20,
    img: "https://i.all3dp.com/wp-content/uploads/2020/01/29172329/lite-e1580315104997.jpg",
    description:
      "Impresora 3D FDM, volumen de impresión 150x150x150mm, cama caliente, fácil de usar, ideal para principiantes.",
  },
  {
    brand: "Geeetech",
    model: "A10M",
    category: "Impresoras",
    price: 390990,
    stock: 15,
    img:"https://http2.mlstatic.com/D_NQ_NP_880692-MLA40670251576_022020-O.webp",
    description:
      "Impresora 3D FDM, volumen de impresión 220x220x260mm, cama caliente, autoleveling, extrusor Titan.",
  },
  {  
    brand: "Anycubic",
    model: "Tough Resin",
    category: "Insumos",
    price: 49900,
    stock: 30,
    img: "https://m.media-amazon.com/images/I/61siQVyKHuL.jpg",
    description:
      "Resina para impresión 3D, 500ml, color gris, resistente a la rotura.",
  },
  {  
    brand: "Elegoo",
    model: "ABS Like Resin",
    category: "Insumos",
    price: 39900,
    stock: 75,
    img: "https://www.elegoo.com/cdn/shop/products/0_c5f0c310-aa9b-4553-a0d8-dec596dd4672.jpg?v=1671070049",
    description: "Resina para impresión 3D, 500ml, color gris, similar al ABS.",
  },
  {  
    brand: "GST 3D",
    model: "PLA Filament",
    category: "Insumos",
    price: 24900,
    stock: 25,
    img: "https://media.tecknicam3d.com.ar//2023/10/GST-Premium-Blanco-1-1-1.png",
    description: "Filamento PLA para impresión 3D, 1kg, multicolor.",
  },
  {
      
    brand: "Printalot",
    model: "PLA Filament",
    category: "Insumos",
    price: 12900,
    stock: 60,
    img: "https://printalot.com.ar/media/2023/08/FPLA17510120_2.jpg",
    description: "Filamento PLA para impresión 3D, 1kg, color negro.",
  },
  {
   
    brand: "Flashforge",
    model: "Photocentric Resin",
    category: "Insumos",
    price: 44900,
    stock: 45,
    img: "https://enfss.flashforgeshop.com/10001/picture/2021/08/3e08a1fc25868f10f6aec4b1060c3365.jpg",
    description: "Resina para impresión 3D, 500ml, color gris, alta precisión.",
  },
  {
   
    brand: "Hellbot",
    model: "PLA Filament",
    category: "Insumos",
    price: 34900,
    stock: 15,
    img: "https://proyectocolor.com.ar/wp-content/uploads/2022/11/1522_800-1-1.jpg",
    description: "Filamento PLA para impresión 3D, 1kg, color gris, económico.",
  },
  {
    
    brand: "Creality",
    model: "Ender 3 Hotend Kit",
    category: "repuestos",
    price: 49900,
    stock: 20,
    img: "https://m.media-amazon.com/images/I/61rZTVKpGcL.jpg",
    description: "Kit de repuesto para el hotend de la impresora 3D Ender 3.",
  },
  {
   
    brand: "Prusa Research",
    model: "MK3S+ SuperPINDA Sensor",
    category: "repuestos",
    price: 24900,
    stock: 30,
    img: "https://i.ebayimg.com/images/g/dMYAAOSwSpdi4OGs/s-l1600.jpg",
    description: "Sensor SuperPINDA de repuesto para la impresora 3D MK3S+.",
  },
  {
 
    brand: "Elegoo",
    model: "Mars UV Resin Vat",
    category: "repuestos",
    price: 19900,
    stock: 25,
    img: "https://m.media-amazon.com/images/I/51MqwFEY8lL._AC_UF350,350_QL50_.jpg",
    description: "Cuba de resina UV de repuesto para la impresora 3D Mars.",
  },
  {

    brand: "Flashforge",
    model: "Finder FDM Nozzle",
    category: "repuestos",
    price: 14900,
    stock: 40,
    img: "https://m.media-amazon.com/images/I/51DTAV-od9L._AC_UF1000,1000_QL80_.jpg",
    description: "Boquilla FDM de repuesto para la impresora 3D Finder.",
  },
  {

    brand: "Grilon",
    model: "PTFE Bowden Tube",
    category: "repuestos",
    price: 12900,
    stock: 10,
    img: "https://c1.neweggimages.com/productimage/nb640/VA3UD23021505B3ZU82.jpg",
    description: "Tubo Bowden de PTFE de repuesto para impresoras 3D.",
  },
  {

    brand: "Creality",
    model: "Build Plate",
    category: "repuestos",
    price: 29900,
    stock: 35,
    img: "https://www.creality3dofficial.com/files/goods/20230224/FlexibleBuildPlate-4.jpg",
    description: "Plataforma de impresión de repuesto para impresoras 3D.",
  },
];



const addProduct = (newProduct) => 
{
  return new Promise((resolve, reject) =>
   {
      const collectionRef = collection(db, 'products')

      addDoc(collectionRef, newProduct)
          .then(({ id }) => {
              resolve(id)
          })
          .catch(error => {
              reject(error)
          })
  })
}

export const uploadProducts = () =>
 {
  for (const product of products) {
   addProduct(product);
  }
};

