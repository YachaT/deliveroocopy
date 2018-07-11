import React from "react";
function DeliverooCard(props) {
  let resume = props.description;
  if (props.description.length > 40) {
    resume = props.description.substr(0, 40) + "...";
  }

  // let popular = "";
  // if (props.popular === true) {
  //   popular = "ce ";
  // }

  function popular() {
    let popular = "";
    if (props.popular === true) {
      return (popular = " ⭐ Populaire");
    }
  }

  function renderPicture() {
    if (props.picture) {
      return <img className="miniphoto" src={props.picture} />;
    } else {
      return null;
    }
  }

  return (
    <div>
      <div className="brunchblock">
        {" "}
        <div className="brunchcontent">
          <p className="brunchtitle">{props.title}</p>
          <p className="brunchdescription">{resume}</p>
          <div className="priceetquality">
            <p className="brunchprice">{props.price} </p>
            {popular()}
          </div>
        </div>
        {/* <img className="miniphoto" src={props.picture} /> */}
        <div className="blockpic">{renderPicture()}</div>
      </div>
    </div>
  );
}

export default DeliverooCard;
