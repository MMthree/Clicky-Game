import React from "react";
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

export function Cards({
    id,
    image,
    clicked
}) {
    return (
        <div className="text-center">
            <div key={id} className="col-sm-6 col-md-3 cards">
                <img className="card-image" src={image} alt="Storm Trooper" />
            </div>
        </div>
    )
}

export default Cards;