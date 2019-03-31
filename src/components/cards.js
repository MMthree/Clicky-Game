import React, { Component } from "react";
import Troopers from "../troopers.json";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(Troopers);
console.log(Troopers)


class Cards extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                    <div className="col-sm-6 col-md-3 cards">
                        <img className="card-image" src={Troopers[0].image} alt="Storm Trooper" />
                    </div>
                </div>
            </div>
        )
    };
};

export default Cards;