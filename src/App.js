import React from 'react';
import { Router } from '@reach/router';
import Home from './paginas/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
