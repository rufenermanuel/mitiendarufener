import React, { useEffect, useState } from "react";

const ItemConunt = ({ initial, cantidad, adding }) => {
  const [number, setNumber] = useState(initial);
  const [buttonState, setButtonState] = useState(false);
  //Función que se ejecuta para notificar que no hay stock
  const noSuma = () => {
    alert(
      `No puede agregar más unidades, llegó al limite disponible que son ${cantidad}`
    );
  };
  //Función que se ejecuta al intentar restar cuando el contador está en cero
  const noResta = () => {
    alert(`Las cantidades indicadas no pueden ser negativas`);
  };
  // FUnción que revisa el stocl y si el mismo es igual a cero deshabilita los botones de sumar y agregar al carrito
  const noStock = () => {
    if (cantidad === 0) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };
  //Función que se ejecuta al presionar el botón agregar al carrito
  const onAdd = () => {
    if (number === 0) {
      alert(
        "Es necesario agregar al menos una unidad para ejecutar esta accion"
      );
    } else if (number === 1) {
      alert(`Se agregó a tu carrito ${number} unidad`);
    } else {
      alert(`Se agregaron a tu carrito ${number} unidades`);
    }
  };
  //Se ejecuta al montar el componente para verificar que exista stock
  useEffect(() => {
    return noStock();
  }, []);

  return (
    <div style={styles.container}>
      <h5>Unidades disponibles: {cantidad}</h5>
      <div style={styles.buttons}>
        <button
          disabled={buttonState}
          onClick={() => {
            console.log(number);
            if (number === cantidad) {
              noSuma();
            } else {
              setNumber(number + 1);
            }
          }}
        >
          +
        </button>

        <h3>{number}</h3>

        <button
          onClick={() => {
            if (number === 0) {
              noResta();
            } else {
              setNumber(number - 1);
            }
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            setNumber(initial);
          }}
        >
          Resetear
        </button>
      </div>
      <button disabled={buttonState} onClick={adding}>
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

export default ItemConunt;
