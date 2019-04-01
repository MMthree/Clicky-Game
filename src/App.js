import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav";
import Header from "./components/header";
import Cards from "./components/cards";
import Troopers from "./troopers.json";

class App extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    message: "",
    availableTroopers: Troopers
  };

  componentDidMount() {
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  game = id => {
    console.log(id)
    const picStatus = this.state.availableTroopers.find(pic => pic.id === id);

    if (picStatus === undefined) {
      this.setState ({
        message: "Game over.",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        availableTroopers: Troopers
      });
    } else {
      const removeTrooper = this.state.availableTroopers.filter(item => item.id !== id);

      this.setState({
        message: "Correct!",
        currentScore: this.state.currentScore +1,
        availableTroopers: removeTrooper
      });
    }
    this.shuffle(Troopers);
  }

  render() {
    return (
      <div>
        <Nav
          highScore={this.state.highScore}
          currentScore={this.state.currentScore} 
        />
        <Header />
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>{this.state.message}</h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {Troopers.map(pics => {
              return (
                <Cards 
                id={pics.id}
                game={this.game}
                key={pics.id}
                image={pics.image}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
