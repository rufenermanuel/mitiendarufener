import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../service/Api";

import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
   const qDb=getFirestore();
   const qCollection=collection(qDb,'products')
   getDocs(qCollection).then(res=>setProducts(res.docs.map(product=>({id:product.id,...product.data()}))))
    /* getProductsByCategory(categoryId).then((datos) => {
      setProducts(datos);
    }); */
  }, [categoryId]);
  console.log(products)

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
