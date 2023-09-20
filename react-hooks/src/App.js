import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'App-logo-reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Counter: {counter}</h1>
        <button
          type="button"
          onClick={() => {
            handleClick();
            handleIncrement();
          }}
        >
          Reverse
        </button>
      </header>
    </div>
  );
}

export default App;
