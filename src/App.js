import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav";
import Header from "./components/header";
import Cards from "./components/cards";
import Footer from "./components/Footer";
import Troopers from "./troopers.json";

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="container">
          <div className="row">
            {Troopers.map(pics => {
              return (
                <Cards 
                key={pics.id}
                image={pics.image}
                />
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
