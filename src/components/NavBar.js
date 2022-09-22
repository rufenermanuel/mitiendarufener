import React from "react";
import logo from "../assets/logo.jpg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header style={styles.container}>
      <img style={styles.image} src={logo} alt="Imagen Ecomerce" />
      <h1 style={styles.title}>mitiendarufener</h1>

      <nav>
        <a style={styles.links} href="">
          Categoria 1{" "}
        </a>
        <a style={styles.links} href="">
          Categoria 2{" "}
        </a>
        <a style={styles.links} href="">
          Categoria 3{" "}
        </a>
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
  image: {
    width: "10%",
  },
  links: {
    padding: 10,
  },
  title: {
    padding: 10,
  },
};

export default NavBar;
