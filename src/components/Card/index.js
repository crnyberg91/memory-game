import React from "react";
import "./style.css";

function Card (props) {
    return(
    <div class="card">
  <img src={props.image} 
  id={props.id} 
  key={props.id} 
  class="card-img-top img-container" 
  alt={props.name} />
</div>
    )
}

export default Card;