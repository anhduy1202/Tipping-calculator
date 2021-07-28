import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.css';
import Calculator from './Calculator';
function App() {
  return (
    <div className="App flex flex-jc-c flex-ai-c">
      <p className="title"> SPLITTER</p>
        <Calculator/>
    </div>
  );
}

export default App;
