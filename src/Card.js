// 1. Import React
import React from "react";

// 2. Declare the component as a function
const Card = (props) => {
  const cardStyle = {
    width: "300px",
    height: "auto"
  };

  return (
    <div className="card-deck" style={cardStyle}>
      <div className="card">
        <img src={props.cardImage} class="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column mt-3">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.btnLabel}
          </a>
        </div>
      </div>
    </div>
  );
};



// 3. Export the component
export default Card;
