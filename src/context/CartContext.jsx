import { useState, createContext } from "react"


export const CartContext = createContext();

export const CartProvider =({children})=> {

    const [cart, setCart] = useState([])

    console.log("carrito:", cart)
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)){
        setCart(prev => [... prev, productToAdd])
      }else{
        console.error("el producto ya está en el carrito")
      }
    }
    
  
    const isInCart =(id) => {
      return cart.some(prod => prod.id ===id)
    }
  
  
    const getTotalQuantity = () => {
  
      let accumulator = 0
  
      cart.forEach(prod=>{
        accumulator += prod.quantity
      })
  
      return accumulator
    }
  
    const totalQuantity = getTotalQuantity()
   return (

    <CartContext.Provider value={{cart, addItem, totalQuantity}}>
        {children}
    </CartContext.Provider>
   ) 
}

