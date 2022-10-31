import React from "react";
import logo from ".././../assets/logo.jpg";
import CartWidget from "../cart/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header style={styles.container}>
      <Link style={styles.a} to="/">
        {" "}
        <img style={styles.image} src={logo} alt="Imagen Ecomerce" />
      </Link>
      <h1 style={styles.title}>mitiendarufener</h1>

      <nav>
        <NavLink style={styles.links} to="/category/backpack">
          Backpack{" "}
        </NavLink>
        <NavLink style={styles.links} to="/category/tshirts">
          T shirts{" "}
        </NavLink>
        <NavLink style={styles.links} to="/category/jacket">
          Jacket{" "}
        </NavLink>
      </nav>
      <CartWidget />
    </header>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
  },
  a: {
    width: "25%",
  },
  image: {
    width: "55%",
  },
  links: {
    padding: 10,
    color:"yellow",
    textDecoration:"none"
  },
  title: {
    padding: 10,
  },
};

export default Navbar;
