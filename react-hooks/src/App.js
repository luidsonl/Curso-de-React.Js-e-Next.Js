import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'App-logo-reverse' : '';

  //componentDIdUpdate - executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDIdMount - executa 1x
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  //com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Counter mudou para', counter);
  }, [counter]);

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
