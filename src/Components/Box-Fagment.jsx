import React from "react";
import { Buttons } from "./Buttons";
import "../App.css";

export function Newbox({ data }) {
  let buttonItem = null;

  if (data.buttonList) {
    buttonItem = data.buttonList.name.map((name, index) => (
      <Buttons
        key={index}
        iconName={data.buttonList.icon[index]}
        title={name}
        enableBackgroundColor={data.buttonList.enableBackgroundColor}
      />
    ));
  }

  return (
    <div className="box-container">
      <div className="box-heading">
        <h3>{data.heading}</h3>
      </div>
      <div className="sub-heading-container">
        <div className="sub-heading">
          {data.subHeading.name.map((name, index) => (
            <Buttons
              key={index}
              iconName={data.subHeading.icon[index]}
              title={name}
              enableBackgroundColor={data.subHeading.enableBackgroundColor}
            />
          ))}
        </div>
      </div>
      <div className="buttons">{buttonItem}</div>
    </div>
  );
}
