import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import SaleCard from "../Cards/SaleCard";
import { ProductContext } from "../../context/ProductContext";
import "../../config/i18n";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OfferOfTheWeekSlider = () => {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="special-offers container mt-5">
        <h1 className="title fw-bold">{t("changeTitleLanguage.title4")}</h1>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          customTransition="all 1s"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
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
        </Carousel>
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

export default OfferOfTheWeekSlider;
