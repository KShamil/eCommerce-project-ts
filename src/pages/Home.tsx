import React, { useState, useContext } from "react";
import MainCard from "../components/Cards/MainCard";
import Slider from "../components/Sliders/Slider";
import { ProductContext } from "../context/ProductContext";
import Banner from "../components/Banner/Banner";
import SpecialOffersSlider from "../components/Sliders/SpecialOffersSlider";
import BestSeller from "../components/Sliders/BestSeller";
import OfferOfTheWeekSlider from "../components/Sliders/OfferOfTheWeekSlider";
import { useEffect } from "react";
import AppleStoreTv from "../components/TV/AppleStoreTv";
import '../config/i18n';
import { useTranslation } from "react-i18next";
import PartnersSlider from "../components/Sliders/PartnersSlider";


const Home = (props:any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products] = useContext(ProductContext);
  const [displayedProducts, setDisplayedProducts] = useState<number>(5);
  const { t, i18n } = useTranslation();

  const LoadMoreProducts = (): void => {
    setDisplayedProducts(displayedProducts + 5);
  };

  

  return (
    <>
      <Slider />
      <Banner />
      <section className="products container">
        <div className="products-blog w-100">
          <h1 className="title fw-bold mt-5">{t("changeTitleLanguage.title1")}</h1>
          <div className="products-list mt-3">
            <div className="product-items mt-2">
              {products
                .filter((item) =>
                  item.title.toLowerCase().includes(props.search)
                )
                .slice(0, displayedProducts)
                .map((item, i) => (
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
            </div>
            {displayedProducts < products.length && (
              <div className="load-more-btn d-flex justify-content-center align-items-center mt-2">
                <button
                onClick={LoadMoreProducts}
                className="btn btn-outline-danger rounded-0 p-3 fw-bold w-50"
              >
                {t("changeBtnLanguage.loadmorebtn")}
              </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <BestSeller />
      <SpecialOffersSlider/>
      <OfferOfTheWeekSlider/>
      <AppleStoreTv/>
      <PartnersSlider/>
    </>
  );
};

export default Home;
