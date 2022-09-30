import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
