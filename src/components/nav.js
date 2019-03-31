import React, { Component} from "react";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar fixed-top text-white p-4 mx-auto">
                    <div class="container">
                        <h5 className="mx-auto">Your score: <span>0</span> | High Score: <span>0</span></h5>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Nav;