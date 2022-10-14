import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartlist, totalPrice, removeItem , clear} = useCartContext();
  return (
    <div>
        {cartlist.map((product) => (
          <li key={product.id}>
            {product.title}
            <img
              src={product.pictureUrl}
              alt={product.title}
              style={styles.image}
            />
            <h6>Total en el carrito: {product.cartQuantity}</h6>
            <button onClick={() => removeItem(product.id)}>Quitar</button>
          </li>
        ))}

        {cartlist.length?<div> <h6> Total de la compra: ${totalPrice()}</h6>
      <button onClick={()=>{clear()}}>Vaciar carrito</button></div>:<p>Tu carrito está vacio</p>}
      {cartlist.length?<Link to={'/form'}> <button>Terminar mi compra</button></Link>:false}
     
      <Link to={`/`}>
        <button>Volver</button>
      </Link>
    </div>
  );
}
const styles = {
  image: {
    width: "50px",
    padding: "0 15px",
  },
};
export default Cart;
