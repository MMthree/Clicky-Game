import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid header__bg">
                <div class="container">
                    <h1 class="display-4 text-center header__title py-2">CLICKY</h1>
                    <h1 class="display-4 text-center header__title">GAME</h1>
                    <p class="lead text-white text-center">Click an image to score a point, but don't click the same one more than once!</p>
                    <p class="text-white text-center">Difficulty: Hard</p>
                </div>
            </div>
        )
    }
}

export default Header;