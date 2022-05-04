import React from "react";
import people from '../img/people-working.svg';
import wood from '../img/wood-logo.svg';

class Section2 extends React.Component {
    render() {
        return (
            <div className="creative-section">
                <div className="div-people">
                    <div className="img-back">
                        <img src={people} alt="people working" />
                    </div>
                </div>
                <div className="creative-text">
                    <div className="wood-container">
                        <img src={wood} alt="wood logo" width='100px' />
                    </div>

                    <h2>CREATIVE TEAM</h2>
                    <h3>GOOG MINDSET</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <div className="btn-container">
                        <button>Meat the team</button>
                        <span className="line-btn"></span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Section2;