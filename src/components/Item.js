import React from "react";

const Item = ({ id, title, price, pictureUrl, description }) => {
  return (
    <div style={styles.container}>
      <div key={id}>
        <h2 style={styles.title}>{title}</h2>
        <img src={pictureUrl} alt={title} style={styles.image} />
        <p>${price}</p>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
    padding: 60,
    width: "28%",
  },
  image: {
    width: "150px",
  },
  links: {
    padding: 10,
  },
  title: {
    padding: 10,
    fontSize: 30,
  },
  description: {
    fontSize: 15,
  },
};

export default Item;
