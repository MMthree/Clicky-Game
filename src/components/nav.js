import React from "react";

export function Nav({
    currentScore,
    highScore
}) {
    return (
        <div>
            <nav className="navbar fixed-top text-white p-4 mx-auto">
                <div className="container">
                    <h5 className="mx-auto">Your score: {currentScore} | High Score: {highScore}</h5>
                </div>
            </nav>
        </div>
    )
}

export default Nav;