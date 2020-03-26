import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FontAwesomeIcon icon={faCoffee} />
        <img src={logo} className="App-logo" alt="logo" />
        {/* {element} */}
        <p>
          Edit <code>src/App.js</code> Anshul chaurasia and save to reload.....
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
    </div>
  );
}

export default App;
