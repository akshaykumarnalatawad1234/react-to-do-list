import {useState} from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './contact.jsx';
import Footer from './Footer.jsx';
import User from './User.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;