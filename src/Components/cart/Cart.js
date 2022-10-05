import React from "react";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <div>
      <h1>Soy Cart ... el componente vacío</h1>{" "}
      <Link to={`/`}>
        <button>Volver</button>
      </Link>
    </div>
  );
}

export default Cart;
