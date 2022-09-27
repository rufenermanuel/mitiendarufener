import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from "./data"
import { getProductById } from "./Api";


const ItemDetailContainer = () => {
  console.log('aca viene la data ...');
  console.log(data);
  const [producDetail, setProducDetail] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
      getProductById(id).then((datos) => {
      setProducDetail(datos);
    });
  }, []);

  return (
    <>
      <h3>Desde ItemDetailContainer</h3>
      <div style={styles.DetailContainer}>
        {producDetail.map((prod) => {
          return (
            <ItemDetail
              key={prod.id}
              title={prod.title}
              price={prod.price}
              description={prod.description}
              pictureUrl={prod.pictureUrl}
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
