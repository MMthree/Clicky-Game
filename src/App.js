import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav";
import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="container">
          <Cards />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
