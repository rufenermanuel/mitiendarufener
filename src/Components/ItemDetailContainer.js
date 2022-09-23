import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producDetail, setProducDetail] = useState([]);
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      pictureUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];
  useEffect(() => {
    const getDetail = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(data);
        }, 2000);
      });
    };
    getDetail().then((datos) => {
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
