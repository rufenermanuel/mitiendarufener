import React, { useEffect, useState } from "react";
import ApiDetails from "./ApiDetails";
import ItemConunt from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import data from "./data";

const ItemListContainer = (props) => {
  const { category } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          if (category) {
            console.log(category);
            const filteredItems = data.filter(
              (prod) => prod.category === category
            );
            res(filteredItems);
          } else {
            res(data);
          }
        }, 1500);
      });
    };
    getData().then((datos) => {
      setProduct(datos);
    });
  }, []);
  return (
    <>
      <h3>ItemListContainer</h3>
      <p style={styles.greet}>{props.greeting}</p>
      {/* Al modificar el prop cantidad a cero se inhabilitan los botones sumar y agregar al carrito */}
      <ItemList />
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
