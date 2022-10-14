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
  const { cartList, clear, totalPrice } = useCartContext();

  const [clientData, setClientData] = useState({
    FullName: "",
    email: "",
    NumberCard: "",
    Celphone: "",
  });

  const handleInputChange = (event) => {
    setClientData({
      ...clientData,
      [event.target.name]: event.target.value,
    });
    console.log(clientData);
  };

  const buy = (e) => {
    const sellsCollection = collection(queryDb, "sellslist");

    addDoc(sellsCollection, {
      buyer: clientData,
      items: cartList,
      date: serverTimestamp(),
      total: totalPrice,
    }).then((result) => {
      alert({
        title: "Order Complete",
        text:
          "We are processing your purschase " +
          clientData.Name +
          " Your ID is: " +
          result.id +
          " Thanks for buying using our e-commerce",
        icon: "success",
        button: "Yes",
      });
      clear();
    });
  };

  return (
    <div>
      <h1>Finish your purchase</h1>
      <form>
        <div>
          <h1>Toral price: ${totalPrice()}</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="form"
            name="FullName"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            className="form"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="Number"
            placeholder="Card Number"
            className="form"
            name="NumberCard"
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <input
            type="Number"
            placeholder="cellphone"
            className="form"
            name="Cellphone"
            onChange={handleInputChange}
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
