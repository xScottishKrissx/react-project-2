import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';

import Body  from './components/body/body';
import Video  from './components/video_page/video';
import Slideshow  from './components/slideshow/slideshow';

import Footer  from './components/footer/footer';

import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
      <Body />
      <Footer />



      
      </div>
    );
  }
}

export default App;
