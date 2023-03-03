import React from "react";
import Slider from "react-slick";
import PartnersCard from "../Cards/PartnersCard";
import partners from "../../data/partnersData";

const PartnersSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="partners-slider container mt-5">
        <div className="title">
          <h1 className="fw-bold">Partners</h1>
        </div>
        <div className="content border border-3 border-primary rounded-3 p-5 bg-body">
        <Slider {...settings}>
        {partners.map((item,i) => (
          <PartnersCard 
          key={i}
          img={item.img} />
        ))}
      </Slider>
        </div>
    </div>
    </>
  );
};

export default PartnersSlider;
