import logo from './logo.svg';
import './App.css';
import Sabrine1 from './Sabrine1';
import Sabrine2 from './Sabrine2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sabrine1 />
      <Sabrine2 />
    </div>
  );
}

export default App;
