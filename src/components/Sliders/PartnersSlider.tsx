import React from "react";
import PartnersCard from "../Cards/PartnersCard";
import partners from "../../data/partnersData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../config/i18n";
import { useTranslation } from "react-i18next";

const PartnersSlider = () => {
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
      <div className="partners-slider container mt-5">
        <div className="title">
          <h1 className="fw-bold">{t("changeTitleLanguage.title5")}</h1>
        </div>
        <div className="content p-5 bg-body">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            customTransition="all 1s"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {partners.map((item, i) => (
              <PartnersCard key={i} img={item.img} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default PartnersSlider;
