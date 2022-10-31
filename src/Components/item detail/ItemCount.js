import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, quantity, adding }) => {
  const [number, setNumber] = useState(initial);
  const [buttonState, setButtonState] = useState(false);
  const noSuma = () => {
    alert(
      `You cannot add more units, you have reached the available limit. ${quantity}`
    );
  };
  const noResta = () => {
    alert(`The amounts indicated cannot be negative.`);
  };
  const noStock = (quantity) => {
    if (quantity === 0) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };
  useEffect(() => {
    return noStock();
  }, []);
  const onAddClick = () => {
    if (number === quantity) {
      noSuma();
    } else {
      setNumber(number + 1);
    }
  };

  const onRestClick = () => {
    if (number === 0) {
      noResta();
    } else {
      setNumber(number - 1);
    }
  };

  const onResetClick = () => {
    setNumber(initial);
  };
  const onAddingToCart = () => {
    adding(number);
  };
  return (
    <div style={styles.container}>
      <h5>Units available: {quantity}</h5>
      <div style={styles.buttons}>
        <button disabled={buttonState} onClick={onAddClick}>
          +
        </button>

        <h3>{number}</h3>

        <button onClick={onRestClick}>-</button>

        <button onClick={onResetClick}>Reset</button>
      </div>
      <button disabled={buttonState} onClick={onAddingToCart}>
        Add to cart {number} units of the product!
      </button>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyCOntent: "space-between",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    color: "purple",
  },
};

export default ItemCount;
