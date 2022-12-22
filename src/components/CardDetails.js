import React from "react";
import list from "../utility/data";
import Card from "./Card";
import "../styles/CardDetails.css";
import { Link } from "react-router-dom";

function cardDetails(props) {
  //   console.log("hello");
  //   console.log(list);
  return (
    <div className="card_box">
      {list.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.title}
            img={item.img}
            cost={item.price}
            amount={item.amount}
            handleClick={props.handleClick}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default cardDetails;
