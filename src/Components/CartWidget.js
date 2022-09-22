import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const CartWidget = () => {
  return (
    <div style={styles.container1}>
      <p style={styles.paragraph}>Desde CartWidget</p>
      <ShoppingCartRoundedIcon />
    </div>
  );
};

const styles = {
  container1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    color: "purple",
  },
  paragraph: {
    padding: 20,
    color: "orange",
  },
};
export default CartWidget;
