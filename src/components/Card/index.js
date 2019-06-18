import React from "react";
import ".style.css";

function Card (props) {
    <div class="card">
  <img src={props.image} id={props.id} key={props.id} class="card-img-top" alt={props.name} />
</div>
}

export default Card;