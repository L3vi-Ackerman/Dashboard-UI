import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import {
  firstBox,
  secondBox,
  featuresList,
  iconList,
  paymentsBox,
} from "../data";
import { Newbox } from "../Components/Box-Fagment";
import CarouselsSlider from "../Components/Slider";
export function Home() {
  const featuresListItem = featuresList.map((feature, index) => (
    <li key={index}>
      <FontAwesomeIcon icon={iconList[index]} className="icon" />
      <a href="#"> {feature}</a>
    </li>
  ));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="grid grid-two-cols">
        <div className="featuresDiv">
          <div className="companyLogo">
            <img
              src="/logo.png"
              alt="This is logo la, Okay?"
              width={400}
              height={300}
            />
          </div>
          <div className="featuresList">
            <ul>{featuresListItem}</ul>
          </div>
        </div>
        <div className="main-body">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Click here to search" />
          </div>
          <Newbox data={firstBox} />
          <Newbox data={secondBox} />
          <CarouselsSlider />
          <Newbox data={paymentsBox} />
        </div>
      </div>
    </>
  );
}
