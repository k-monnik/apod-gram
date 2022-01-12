import React, { Component } from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const label = this.state.liked ? <FontAwesomeIcon icon={faHeart} size="6x" style={{ color: "grey" }} /> : <FontAwesomeIcon icon={faHeart} size="6x" />;

        return (
            <div>
                <button className="btn-red" onClick={this.handleClick}>
                    {label}
                </button>
            </div>
        );
    }
}

export default Button;
