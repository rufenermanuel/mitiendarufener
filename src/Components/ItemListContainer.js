import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductsBiCategory } from "./Api";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProductsBiCategory(categoryId).then((datos) => {
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
