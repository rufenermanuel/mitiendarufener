import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from "./data"

const ItemDetailContainer = () => {
  console.log('aca viene la data ...');
  console.log(data);
  const [producDetail, setProducDetail] = useState([]);
  const { id } = useParams();
  /* const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      pictureUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      pictureUrl:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      pictureUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    }, 
  ];*/
  useEffect(() => {
    const getDetail = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(data.filter(dat=>dat.id===parseInt(id) ));
        }, 1500);
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
