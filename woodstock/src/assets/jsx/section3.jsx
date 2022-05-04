import React from "react";
import wood from "../img/wood-logo.svg";

class Section3 extends React.Component {
    render() {
        return (
            <div className="contact-section">
                <div className="contact-title">
                    <p>
                        CONTACT US
                    </p>
                </div>
                <div className="form">
                    <div className="ipt-name-container">
                        <input type="text" placeholder="FIRST NAME" />
                        <input type="text" placeholder="LAST NAME" />
                    </div>
                    <input type="text" placeholder="MAIL ADRESS" className="ipt-mail" />
                    <input type="textarea" placeholder="MESSAGE" className="ipt-msg" />
                </div>
                <div className="wood-footer">
                    <img src={wood} alt="wood footer" />
                </div>
            </div>
        )
    }
}

export default Section3;