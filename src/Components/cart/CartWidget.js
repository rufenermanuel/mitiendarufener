import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalCartQuantity } = useCartContext();

  return (
    <div style={styles.container1}>
      {totalCartQuantity() > 0 ? (
        <div>
          <NavLink to="/cart">
            <ShoppingCartRoundedIcon />
          </NavLink>
          {totalCartQuantity()}
        </div>
      ) : (
        <></>
      )}
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
  apear: {
    display: "none",
  },
};
export default CartWidget;
