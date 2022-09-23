import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ApiDetails = () => {
  const [prodDetail, setProdDetail] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const url = `https://fakestoreapi.com/products?limit=1`;
    const resp = await fetch(url);
    const data = await resp.json();

    const productsData = data.map((prod) => {
      return {
        id: prod.id,
        title: prod.title,
        price:prod.price,
        pictureUrl: prod.image,
        description: prod.description,
      };
    });

    setProdDetail(productsData);
  };

  return (
    <>
      <h3>Desde la Api</h3>
      <div style={styles.DetailContainer}>
        {prodDetail.map(({id,title,price,description,pictureUrl}) => {
          return (
            <ItemDetail
              key={id}
              title={title}
              price={price}
              description={description}
              pictureUrl={pictureUrl}
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
export default ApiDetails;
