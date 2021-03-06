import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image}
        id={props.id}
        key={props.id}
        onClick={props.onClick}
        className="card-img-top img-container"
        alt={props.name} />
    </div>
  )
}

export default Card;