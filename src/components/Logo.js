import React from "react";

function Logo(props) {
  console.log(props.url);
  return <img className="logo" src={props.url} />;
}

export default Logo;
