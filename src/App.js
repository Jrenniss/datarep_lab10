import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';

//Change from function to class
class App extends Component {
  render(){
  return (
    //Components - Contain content to make one web page.
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
  }
}

export default App;
