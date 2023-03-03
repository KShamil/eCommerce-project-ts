import React, { useContext, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SaleCard from "../Cards/SaleCard";
import { ProductContext } from "../../context/ProductContext";
import "../../config/i18n";
import { useTranslation } from "react-i18next";
import _ from "lodash";

const SpecialOffersSlider = () => {
  const [products] = useContext(ProductContext);
  const randomizedProducts = useMemo(() => _.shuffle(products), [products]);
  const { t, i18n } = useTranslation();
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
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="special-offers container mt-5">
        <h1 className="title fw-bold">{t("changeTitleLanguage.title3")}</h1>
        <Slider {...settings}>
          {randomizedProducts.map((item, i) => (
            <SaleCard
              key={i}
              id={item.id}
              img={item.photo}
              title={item.title}
              price={item.price}
              salePrice={item.salePrice}
              rating={Number(item.rating)}
              addProduct={item}
              addWishlist={item}
            />
          ))}
        </Slider>
        <Link
          to="/specialoffers"
          className="btn btn-outline-danger rounded-0 w-100 d-flex justify-content-center align-items-center p-3 fw-bold"
        >
          {t("changeBtnLanguage.showmorebtn")}
        </Link>
      </div>
    </>
  );
};

export default SpecialOffersSlider;
