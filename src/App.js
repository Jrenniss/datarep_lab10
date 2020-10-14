//Imports used to Connect other Components within the App
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
//Unused import, but still availabe
import { Footer } from './components/footer';
import { Content } from './components/content';
//Bootstrap to add Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

//BrowserRouter used to navigate the pages and components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';

//Change from function to class
class App extends Component {
  render() {
    return (
      //Route diverts user to pages containing chosen components
      //Navbar present on all pages navigates them all
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/header' component={Header} exact />
          </Switch>
        </div>
      </Router>
      //End of Router
    );
  }
}

export default App;
