import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid header__bg">
                <div className="container">
                    <h1 className="display-4 text-center text-white header__title">STORM TROOPER</h1>
                    <h1 className="text-center text-white header__title">MEMORY GAME</h1>
                    <p className="lead text-white text-center">Click an image to score a point, but don't click the same one more than once!</p>
                    <p className="text-white text-center">Difficulty: Hard</p>
                </div>
            </div>
        )
    }
}

export default Header;