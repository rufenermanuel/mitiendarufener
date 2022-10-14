import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "products");
    if (categoryId) {
      const filterdByCategory = query(queryCollection, where("category", "==", categoryId));
      getDocs(filterdByCategory)
      .then(res=>setProducts(res.docs.map(product=>({id:product.id,...product.data()}))))
      } else {
        getDocs(queryCollection)
        .then(res=>setProducts(res.docs.map(product=>({id:product.id,...product.data()}))))
    }
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
