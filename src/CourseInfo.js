import React from "react";

const CourseInfo = (props) => {
  const courseStyle = {
    width: "60em",
    height: "20em",
  };
  return (
    <div className="courseInfo" style={courseStyle}>
      <div className="title">
        <h1 className="display-4"> {props.title} </h1>
      </div>
      <div className="body">
        <p className="lead" style={{ padding: "2em", float: "left" }}>
          {props.text}
        </p>
        <p className="lead" style={{ padding: "2em", float: "left" }}>
          {props.text1}
        </p>
        <p className="lead" style={{ padding: "2em", float: "left" }}>
          {props.text2}
        </p>
        <p className="lead" style={{ padding: "2em", float: "left" }}>
          {props.text3}
        </p>
        <p className="lead" style={{ padding: "2em", float: "left" }}>
          {props.text4}
        </p>
        <p> {props.para} </p>
      </div>
    </div>
  );
};

export default CourseInfo;
