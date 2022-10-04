import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext); //Opcional Custom Hook

export function CarContextProvider({ children }) {
  
  const [cartlist, setCartlist] = useState([]);
  
  const isInCart = (id) => cartlist.find((prod) => prod.id === id);

  const addToCart = (item, cartQuantity) => {
    
    if (isInCart(item.id)) {
      console.log(' YA HABÍA')
      const newCart = cartlist.map((prod) => {
        if (prod.id === item.id) {
          const newQuantity = prod.cartQuantity + cartQuantity;
          console.log(prod,' ', newQuantity)

          return { ...prod, cartQuantity: newQuantity };
        } else {
          return prod;
        }
      });

      setCartlist(newCart);
    } else {
      console.log('NO HABÍA DE ESTO')
      const newProduct = { 
        ...item, 
        cartQuantity:cartQuantity 
      };
      console.log(newProduct); 
      setCartlist([...cartlist, newProduct]);
    }
  };

  const removeItem = (item) => {
    if (isInCart(item.id)) {
      const newCart = cartlist.filter((prod) => prod.id !== item.id);
      setCartlist(newCart);
    }
  };

  const clear = () => setCartlist([]);
  console.log('cartList: ',cartlist);

  return (
    <CartContext.Provider value={{ addToCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
