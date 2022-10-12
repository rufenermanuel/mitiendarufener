import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/Api";

import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producDetail, setProducDetail] = useState([]);
  const [zxc,setZxc]=useState([])
  const { id } = useParams();

  useEffect(() => {
    const qDb = getFirestore();
    const qDoc = doc(qDb, "products", "8e9ovZg7ENHTelGyZXxE");
    getDoc(qDoc).then((res) => setZxc( {id: res.id, ...res.data()} ));
   

    getProductById(id).then((datos) => {
      setProducDetail(datos);
    });
  }, [id]);
  console.log(zxc)
  console.log(zxc)

  
  return (
<>
      <h3>Desde ItemDetailContainer</h3>
      <div style={styles.DetailContainer}>
        {producDetail.map((prod) => {
          return <ItemDetail key={prod.id} item={prod} />;
        })}
      </div>
    </>   
  );
};
const styles = {
  DetailContainer: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
    borderStyle: "dotted",
  },
};
export default ItemDetailContainer;
