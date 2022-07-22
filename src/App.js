import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import Menu from './components/MenuComponent';
import { DISHES } from "./shared/dishes"
import "./App.css";    


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
