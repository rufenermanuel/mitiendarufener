import React, { useEffect, useState } from "react";
import Item from "./Item";

const ApiDetails = () => {
  const [prodDetail, setProdDetail] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const url = `https://fakestoreapi.com/products?limit=1`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    const productsData = data.map((prod) => {
      return {
        id: prod.id,
        title: prod.title,
        pictureUrl: prod.image,
        description: prod.description,
      };
    });

    console.log(productsData);
    setProdDetail(productsData);
  };

  return (
    <>
      <h3>Desde la Api</h3>
      <div style={styles.DetailContainer}>
        {prodDetail.map((prod) => {
          return (
            <Item
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
export default ApiDetails;
