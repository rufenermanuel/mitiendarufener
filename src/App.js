import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Counter } from './components/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is my Store!!! mitiendarufener
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
      <body>
        <Counter/>
      </body>
    </div>
  );
}

export default App;
