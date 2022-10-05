import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import ItemListContainer from "./Components/item list/ItemListContainer";
import ItemDetailContainer from "./Components/item detail/ItemDetailContainer";
import Cart from "./Components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import { CarContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CarContextProvider>
      </header>
    </div>
  );
}

export default App;
