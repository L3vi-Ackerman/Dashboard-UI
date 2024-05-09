import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ntcImage from "../ntc.png";
import ncellImage from "../ncell.jpg";
import capitalMarketImage from "../capital-market.jpg";
import electricityImage from "../electricity.jpg";
import creditorsPaymentImage from "../creditors-payment.jpg";
import "../App.css";
<link rel="stylesheet" type="text/css" href="http://kenwheeler.github.io/slick/slick/slick-theme.css"/>

const CarouselsSlider = () => {
  const carousels = [
    {
      title: "NTC Topup",
      image: ntcImage,
    },
    {
      title: "Ncell Topup",
      image: ncellImage,
    },
    {
      title: "Broker Payment",
      image: capitalMarketImage,
    },
    {
      title: "Electricity Bill Payment",
      image: electricityImage,
    },
    {
      title: "Creditors Payment",
      image: creditorsPaymentImage,
    },
  ];
  const settings = {
    dots:true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carousels.map((carousel, index) => (
          <div key={index} className="carousel-item">
            <img src={carousel.image} alt="" className="bg-mage" />
            <div className="bottom-left">
              <p>{carousel.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselsSlider;
