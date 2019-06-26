import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-success">
        <h1>Clicky Game</h1>
        <li>Score: {props.score}</li>
        <li>High Score: {props.highScore}</li>
        </nav>
    )
}

export default Nav;