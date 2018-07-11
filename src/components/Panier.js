import React from "react";

function Panier(props) {
  return (
    <div className="panierblock">
      <div className="validateblock">
        <button className="panierbutton"> {props.text}</button>
      </div>
      <div className="status">{props.status}</div>
    </div>
  );
}

export default Panier;
