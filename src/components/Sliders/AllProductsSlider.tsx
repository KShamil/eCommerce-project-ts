import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import MainCard from "../Cards/MainCard";
import { ProductContext } from "../../context/ProductContext";
import "../../config/i18n";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AllProductsSlider = () => {
  const [products] = useContext(ProductContext);
  const randomizedProducts = useMemo(() => _.shuffle(products), [products]);
  const { t, i18n } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="special-offers container mt-5">
        <h1 className="title fw-bold">{t("changeTitleLanguage.title1")}</h1>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          customTransition="all 1s"
        >
          {randomizedProducts.map((item, i) => (
            <MainCard
              key={i}
              id={item.id}
              img={item.photo}
              title={item.title}
              price={item.price}
              rating={Number(item.rating)}
              addProduct={item}
              addWishlist={item}
            />
          ))}
        </Carousel>
        <Link
          to="/allproducts"
          className="btn btn-outline-danger rounded-0 w-100 d-flex justify-content-center align-items-center p-3 fw-bold"
        >
          {t("changeBtnLanguage.showmorebtn")}
        </Link>
      </div>
    </>
  );
};

export default AllProductsSlider;
