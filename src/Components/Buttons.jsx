import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Buttons({ iconName, title, enableBackgroundColor = true }) {
  const conditionalStyle = {
    backgroundColor: enableBackgroundColor ? "#155aa9" : "white",
    color: enableBackgroundColor ? "white" : "#155aa9",
    // width: enableBackgroundColor? '210px' : "fit-content"
  };
  return (
    <button
      className="buttons"
      style={{
        ...conditionalStyle,
        width: enableBackgroundColor ? "210px" : "fit-content",
        margin: enableBackgroundColor ? "0 5px 0px 0px" : "0 2px 0px 0px"
      }}
    >
      <FontAwesomeIcon
        icon={iconName}
        className="icon"
        style={conditionalStyle}
      />
      <a href="#" style={conditionalStyle}>
        {title}
      </a>
    </button>
  );
}
