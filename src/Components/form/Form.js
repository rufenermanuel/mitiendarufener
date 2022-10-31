import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function Form(props) {
  const queryDb = getFirestore();
  const { cartlist, clear, totalPrice } = useCartContext();
  const [clientData, setClientData] = useState({
    FullName: "",
    email: "",
    NumberCard: "",
    Cellphone: "",
  });

  const handleInputChange = (event) => {
    setClientData({
      ...clientData,
      [event.target.name]: event.target.value,
    });
  };

  const buy = (e) => {
    const sellsCollection = collection(queryDb, "sellslist");

    addDoc(sellsCollection, {
      buyer: clientData,
      items: cartlist,
      date: serverTimestamp(),
      total: totalPrice(),
    })
      .then((result) => {
        alert(
          `Thank you very much for your purchase. Your operation ID is ${result.id}`
        );
        clear();
      })
      .catch((e) => {
        console.log("error");
        console.error(e);
      });
  };

  return (
    <div>
      <h1 id="finish">Finish your purchase</h1>
      <form>
        <div>
          <h1>Toral price: ${totalPrice()}</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="form"
            name="FullName"
            onChange={handleInputChange}
            id="input-Id"
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            className="form"
            name="email"
            onChange={handleInputChange}
            id="input-Id"
          ></input>
        </div>
        <div>
          <input
            type="Number"
            placeholder="Card Number"
            className="form"
            name="NumberCard"
            onChange={handleInputChange}
            id="input-Id"
          ></input>
        </div>
        <div>
          <input
            type="Number"
            placeholder="cellphone"
            className="form"
            name="Cellphone"
            onChange={handleInputChange}
            id="input-Id"
          ></input>
        </div>
      </form>
      <div>
        <button onClick={buy}>Submit</button>
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
}

export default Form;
