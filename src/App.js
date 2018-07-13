import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Slider from './Slider/Slider.jsx';
import Navi from './Navi/Navi.jsx';
import Card from './Card/Card.jsx';
import './App.css';


class App extends Component {
  render() {
    return <div className="App">
      <Header/>
      <Navi/>
      <Slider/>
      <Card/>
      <Footer/>
    </div>;
  }
}

export default App;
