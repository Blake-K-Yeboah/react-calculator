import React, { useState } from 'react';
import './App.scss';

function App() {

  const [output, setOutput] = useState('');

  const appendOutput = (val) => {
    setOutput(output + val.toString());
  }

  const clearOutput = () => {
    setOutput('');
  }

  const calculateAnswer = () => {
    let answer = eval(output);

    setOutput(answer);
  }
  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="output">{output}</div>
        <div className="btn-grid">
          <button onClick={appendOutput.bind(this, 7)}>7</button>
          <button onClick={appendOutput.bind(this, 8)}>8</button>
          <button onClick={appendOutput.bind(this, 9)}>9</button>
          <button className="dark" onClick={appendOutput.bind(this, ' / ')}>&divide;</button>
          <button className="red" onClick={clearOutput}>&times;</button>
          <button onClick={appendOutput.bind(this, 4)}>4</button>
          <button onClick={appendOutput.bind(this, 5)}>5</button>
          <button onClick={appendOutput.bind(this, 6)}>6</button>
          <button className="dark" onClick={appendOutput.bind(this, ' * ')}>&times;</button>
          <button className="dark" onClick={appendOutput.bind(this, ' / 100')}>%</button>
          <button onClick={appendOutput.bind(this, 1)}>1</button>
          <button onClick={appendOutput.bind(this, 2)}>2</button>
          <button onClick={appendOutput.bind(this, 3)}>3</button>
          <button className="dark" onClick={appendOutput.bind(this, ' - ')}>&minus;</button>
          <button className="orange" onClick={calculateAnswer}>=</button>
          <button className="column2" onClick={appendOutput.bind(this, 0)}>0</button>
          <button className="dot" onClick={appendOutput.bind(this, '.')}>.</button>
          <button className="dark" onClick={appendOutput.bind(this, ' + ')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
