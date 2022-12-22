import React, { useState } from "react";
import "../styles/Card.css";
function Card(props) {
  const [add, setAdd] = useState("Add");
  function onClickHandler() {
    if (add === "Add") {
      setAdd("Added");
      props.handleClick(props.item);
    }
  }
  return (
    <div className="cards">
      <div className="card">
        <img className="img_content" src={props.img} alt="item1" />
      </div>
      <div className="details">
        <h3>{props.name}</h3>
        <h5>${props.cost}</h5>
        <button className="card_button" onClick={onClickHandler}>
          {add}
        </button>
      </div>
    </div>
  );
}

export default Card;
