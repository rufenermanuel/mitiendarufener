import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, quantity, adding }) => {
  const [number, setNumber] = useState(initial);
  const [buttonState, setButtonState] = useState(false);
  //Función que se ejecuta para notificar que no hay stock
  const noSuma = () => {
    alert(
      `No puede agregar más unidades, llegó al limite disponible que son ${quantity}`
    );
  };
  //Función que se ejecuta al intentar restar cuando el contador está en cero
  const noResta = () => {
    alert(`Las cantidades indicadas no pueden ser negativas`);
  };
  // Función que revisa el stock y si el mismo es igual a cero deshabilita los botones de sumar y agregar al carrito
  const noStock = (quantity) => {
    if (quantity === 0) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };
  //Se ejecuta al montar el componente para verificar que exista stock
  useEffect(() => {
    return noStock();
  }, []);
  const onAddClick = () => {
    console.log(number);
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
  const onAddingToCart=()=>{
adding(number)
  }
  return (
    <div style={styles.container}>
      <h5>Unidades disponibles: {quantity}</h5>
      <div style={styles.buttons}>
        <button disabled={buttonState} onClick={onAddClick}>
          +
        </button>

        <h3>{number}</h3>

        <button onClick={onRestClick}>-</button>

        <button onClick={onResetClick}>Resetear</button>
      </div>
      <button disabled={buttonState} onClick={onAddingToCart}>
        Agregar al carrito {number} unidades del producto !
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
