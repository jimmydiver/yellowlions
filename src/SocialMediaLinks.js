import React from "react";

const SocialMediaLinks = (props) => {
  return (
    <div style={{ display: "flex",}}>
      {" "}
      {props.children}{" "}
    </div>
  );
};

export default SocialMediaLinks;
