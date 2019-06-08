import React from 'react';
import './App.css';
import CounterContainer from './CounterContainer';

function App() {
  return (
    <div className="App">
      {/* appel du composant pour affichage */}
      <CounterContainer />   
    </div>
  );
}

export default App;
