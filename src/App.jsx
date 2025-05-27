import './App.css';
import { multiply, add, subtract, divide } from "@ghostrydr/lesson8/src/appOperations"

function App() {

  function get(id) {
    return document.getElementById(id).value
  }
  return (
    <div className="App">
      <header className="App-header">
        <input id="num1" />
        <input id="num2" />
        <button onClick={() => alert(multiply(get('num1'), get('num2')))}>Multiply</button>
        <button onClick={() => alert(divide(get('num1'), get('num2')))}>Divide</button>
        <button onClick={() => alert(add(get('num1'), get('num2')))}>Add</button>
        <button onClick={() => alert(subtract(get('num1'), get('num2')))}>Subtract</button>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
