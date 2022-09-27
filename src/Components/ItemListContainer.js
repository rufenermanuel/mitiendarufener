import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import data from "./data";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const getData = () => {
  /* Si categoryId getProductByCategory else getProduct */
  
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (categoryId) {
          console.log(categoryId);
          const filteredItems = data.filter(
            (prod) => prod.category === categoryId
          );
          res(filteredItems);
        } else {
          res(data);
        }
        res(categoryId?data.filter(
          (prod) => prod.category === categoryId
        ):data)
      }, 1500);
    });
  };
  useEffect(() => {
    getData().then((datos) => {
      setProducts(datos);
    });
  }, [categoryId]);
  return (
    <>
      <h3>ItemListContainer</h3>
      <p style={styles.greet}>{props.greeting}</p>
      {/* Al modificar el prop cantidad a cero se inhabilitan los botones sumar y agregar al carrito */}
      <ItemList list={products} />
    </>
  );
};
const styles = {
  greet: {
    padding: 20,
    color: "yellow",
  },
};
export default ItemListContainer;
