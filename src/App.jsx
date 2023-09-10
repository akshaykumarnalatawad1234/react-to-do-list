import {useState} from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
//whenever a variable is changed useState rerenders

function App() {
  return (
    <div>
      <Header/>
      <Home />

    </div>
  );
}

export default App;