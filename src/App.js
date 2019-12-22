import React, { Component } from 'react';
import Navigation from './containers/Navigation'
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import cookie from 'cookie'
// import BusinessListings from './components/BusinessListings';

//import logo from './logo.svg';


function App() {
  console.log(process.env.REACT_APP_MAP_KEY)
  return (
    <Provider store = {store}>
      <BrowserRouter>
          {console.log(document.cookie)}
          <Navigation/>
          <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
