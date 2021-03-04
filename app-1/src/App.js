import React from 'react';
import TextBox from './Components/TextBox'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextBox/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />                      // i know this is just the logo and learn react link but i'm too scared to delete it
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
