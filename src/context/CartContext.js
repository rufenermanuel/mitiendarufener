import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext); //Opcional Custom Hook

export function CarContextProvider({ children }) {
  const [cartlist, setCartlist] = useState([]);

  const isInCart = (id) => cartlist.find((prod) => prod.id === id);

  const addToCart = (item, cartQuantity) => {
    if (isInCart(item.id)) {
      console.log(" YA HABÍA");
      const newCart = cartlist.map((prod) => {
        if (prod.id === item.id) {
          const newQuantity = prod.cartQuantity + cartQuantity;
          console.log(prod, " ", newQuantity);

          return { ...prod, cartQuantity: newQuantity };
        } else {
          return prod;
        }
      });

      setCartlist(newCart);
    } else {
      console.log("NO HABÍA DE ESTO");
      const newProduct = {
        ...item,
        cartQuantity: cartQuantity,
      };
      console.log(newProduct);
      setCartlist([...cartlist, newProduct]);
    }
  };

  const removeItem = (id) => {setCartlist(cartlist.filter(product=>product.id !==id))
  
  };

  const clear = () => setCartlist([]);

  const totalPrice = () => {
    return cartlist.reduce(
      (acc, product) => (acc += product.price * product.cartQuantity),
      0
    );
  };

  const totalCartQuantity = () => {
    return cartlist.reduce((acc, product) => acc +=  product.cartQuantity,
    0)
  };

  return (
    <CartContext.Provider value={{ addToCart, removeItem, clear, totalPrice, totalCartQuantity, cartlist }}>
      {children}
    </CartContext.Provider>
  );
}
