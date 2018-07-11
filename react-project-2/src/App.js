import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



import Header from './components/header/header';
import MainContent from './components/main_content/main_content';

// the pages of the site that will change.
// import Home from '/home';
// import Feature  from './components/feature/feature';
// import About from '';

import Footer  from './components/footer/footer';

// import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div><p className="brand">christopher dunne</p></div>
      <Header />
      <MainContent />
      <Footer />



      
      </div>
    );
  }
}

export default App;
