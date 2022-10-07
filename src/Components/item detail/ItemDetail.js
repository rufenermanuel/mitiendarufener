import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { id, title, price, pictureUrl, description, quantity } = item;
  const [productsAdded, setProductAdded] = useState(false);
  const { addToCart , cartlist} = useCartContext();

  const onAdding = (cartQuantity) => {
    setProductAdded(true);
    addToCart(item, cartQuantity);
  };
  return (
    <div style={styles.container}>
      <div key={id}>
        <h2 style={styles.title}>{title}</h2>
        <img src={pictureUrl} alt={title} style={styles.image} />
        <p>${price}</p>
        <p style={styles.description}>{description}</p>

        {productsAdded ? (
          <div>
            <NavLink to="/cart">
              <button>Ir al Carrito ! </button>
            </NavLink>
          </div>
        ) : (
          <div>
            <Link to={`/`}>
              <button>Volver</button>
            </Link>
            <ItemCount quantity={quantity} initial={1} adding={onAdding} />
          </div>
        )}
        {cartlist.length?<button>Terminar mi compra</button>:false}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
    padding: 60,
    width: "90%",
    height: "620px",
    borderStyle: "solid",
    borderRadius: "3%",
    color: "yellow",
  },
  image: {
    width: "150px",
  },
  links: {
    padding: 10,
  },
  title: {
    padding: 25,
    fontSize: 25,
  },
  description: {
    fontSize: 15,
  },
};

export default ItemDetail;
