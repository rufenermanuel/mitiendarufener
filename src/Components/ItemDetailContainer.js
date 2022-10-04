import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "./Api";


const ItemDetailContainer = () => {
  const [producDetail, setProducDetail] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
      getProductById(id).then((datos) => {
      setProducDetail(datos);
    });
  }, [id]);

  return (
    <>
      <h3>Desde ItemDetailContainer</h3>
      <div style={styles.DetailContainer}>
        {producDetail.map((prod) => {
          return (
            <ItemDetail
              key={prod.id}
              item={prod}
            />
          );
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
