import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greeting="Saludos desde Greeting en APP.js usando props" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my Store!!! mitiendarufener</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
