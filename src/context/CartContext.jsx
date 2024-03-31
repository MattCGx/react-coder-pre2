import { useState, createContext } from "react"


export const CartContext = createContext();

export const CartProvider =({children})=> {

    const [cart, setCart] = useState([])

  
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

    const eraseCart = () => {
      setCart([])
    }
  
    const eraseItem = (id) => {
      const updatedCart = cart.filter(prod => prod.id !== id)
      setCart(updatedCart)
    }


    const getTotalQuantity = () => {
  
      let quantityAccumulator = 0
  
      cart.forEach(prod=>{
        quantityAccumulator += prod.quantity
      })
  
      return quantityAccumulator
    }
  
    const totalQuantity = getTotalQuantity();

    
    const getTotalPrice = () => {
      let totalPriceAccumulator = 0
      
      cart.forEach(prod => {
        totalPriceAccumulator += prod.quantity * prod.price
      })

      return totalPriceAccumulator

    }

    const totalPrice = getTotalPrice();



   return (

    <CartContext.Provider value={{cart, addItem, totalQuantity, eraseCart, eraseItem, totalPrice}}>
        {children}
    </CartContext.Provider>
   ) 
}

