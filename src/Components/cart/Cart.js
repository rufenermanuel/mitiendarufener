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
            <h6>Total in cart:  {product.cartQuantity}</h6>
            <button onClick={() => removeItem(product.id)}>Remove</button>
          </li>
        ))}

        {cartlist.length?<div> <h6> Total purchase: ${totalPrice()}</h6>
      <button onClick={()=>{clear()}}>Empty the cart</button></div>:<p>Your cart is empty</p>}
      {cartlist.length?<Link to={'/form'}> <button>Finish my purchase</button></Link>:false}
     
      <Link to={`/`}>
        <button>Return</button>
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
