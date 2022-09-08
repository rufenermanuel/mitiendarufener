import React, { useState } from "react";

export const ItemConunt = (props) => {
  const [number, setNumber] = useState(0);
  const [buttonState,setButtonState] = useState(false)

  const disable=()=>{
    if (props.cantidad>number+1) {
        setButtonState(false)
        console.log('props mayor')
    } else {
        setButtonState(true)
        console.log('props menor')

    }
}

/* console.log(props.cantidad)
console.log(number) */
  return (
    <>
      <h1>Unidades disponibles: {props.cantidad}</h1>
      <h3>{number}</h3>
      <div style={styles.buttons}>
     
        <button disabled={buttonState}
          onClick={() => {
            console.log(`entró a onclick + ${number}` )
            setNumber(number + 1);
            console.log(number)
            disable()
            console.log(number)

          }}
        >
          Sumar
        </button><button
          onClick={() => {
            disable()
            setNumber(0);
            console.log(number)

                      }}
        >
          Resetear
        </button>
        <button
          onClick={() => {
            disable()
            setNumber(number - 1);

          }}
        >
          Restar
        </button>
        
      </div>
      <button>Agregar al Carrito</button>
    </>
  );
};
const styles = {
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    color: "purple",
  },
};
