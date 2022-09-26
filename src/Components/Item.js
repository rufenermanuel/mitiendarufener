import React from "react";
import ItemConunt from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl, description }) => {
  return (
    <div style={styles.container}>
      <div key={id} >
        <h2 style={styles.title}>{title}</h2>
        <Link to={`/:${id}`}>
          <img id={id} src={pictureUrl} alt={title} style={styles.image} />{" "}
        </Link>

        <p>${price}</p>
        <p style={styles.description}>{description}</p>
        <ItemConunt cantidad={5} initial={1} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "30%",
    height: "620px",
    borderStyle: "solid",
    borderRadius: "3%",
    color: "yellow",
  },
  image: {
    width: "150px",
  },
  links: {
    padding: 10,
  },
  title: {
    padding: 25,
    fontSize: 25,
  },
  description: {
    fontSize: 15,
  },
};

export default Item;
