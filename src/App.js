import React from 'react';
import Navigation from './components/Navigation'
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

import BusinessListings from './components/BusinessListings';
import { BrowserRouter } from 'react-router-dom'
//import logo from './logo.svg';


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
          <Navigation/>
          <Router/>
          <BusinessListings/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
