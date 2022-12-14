import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producDetail, setProducDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "products", id);
    getDoc(queryDoc).then((res) =>
      setProducDetail({ id: res.id, ...res.data() })
    );
  }, [id]);

  return (
    <>
      <div style={styles.DetailContainer}>
        <ItemDetail item={producDetail} />;
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
