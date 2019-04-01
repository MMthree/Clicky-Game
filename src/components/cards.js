import React from "react";

const Cards = props => (
        <div className="text-center">
            <div key={props.id} className="col-sm-6 col-md-3 cards" onClick={() => props.game(props.id)} >
                <img className="card-image" src={props.image} alt="Storm Trooper" />
            </div>
        </div>
    )

export default Cards;