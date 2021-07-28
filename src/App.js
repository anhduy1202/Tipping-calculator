import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.css';
import Calculator from './Calculator';
function App() {
  return (
    <main className="App flex flex-jc-c flex-ai-c">
      <header className="title"> SPLITTER</header>
        <Calculator/>
    </main>
  );
}

export default App;
