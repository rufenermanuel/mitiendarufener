import React from "react";
import Item from "./Item";

const ItemList = ({ list = [] }) => {
  return (
    <div style={styles.container}>
      {list.map((prod) => {
        return (
          <Item 
            data={prod}
            key={String('item-'+prod.id)}
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
