import React from "react";


const Jumbotron = (props) => {
  return (

<div className="jumbotron">   
  
      <h1 className="display-3">{props.title}</h1>
      <h1 className="display-2 trip">{props.trip}</h1>
      <h4 className="display-6 trip">{props.titleblog}</h4>
      <h4 className="display-4 trip">{props.spaceblog}</h4>
      

      <p className="lead">{props.text}</p>
      <p className="lead good">{props.textblog}</p>
      <p>{props.para}</p>      
    </div>
  );
};
export default Jumbotron;
