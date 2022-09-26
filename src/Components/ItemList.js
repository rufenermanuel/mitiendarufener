import React, { useEffect, useState } from "react";
import Item from "./Item";
import data from "./data";
const ItemList = (props) => {
 
  return (
    <div style={styles.container}>
      {data.map((prod) => {
        return (
          <Item
            key={prod.id}
            title={prod.title}
            price={prod.price}
            pictureUrl={prod.pictureUrl}
          />
        );
      })}
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
  },
};
export default ItemList;
