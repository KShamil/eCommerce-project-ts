import React, { useState, useContext, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import BestSellerCard from "../Cards/BestSellerCard";
import "../../config/i18n";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSeller = () => {
  const [products] = useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState("all");
  const { t, i18n } = useTranslation();

  const handleFilter = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const filteredData = useMemo(
    () =>
      activeCategory !== "all"
        ? products.filter((item) => item.category === activeCategory)
        : products,
    [activeCategory, products]
  );

  const randomizedProducts = useMemo(
    () => _.shuffle(filteredData),
    [filteredData]
  );

  const responsive = {
    superLargeDesktop: {
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
      <div className="best-sellers container">
        <div className="col-12 mt-5">
          <div className="mb-6 d-xl-flex justify-content-between align-items-center">
            <div className="mb-5 mb-xl-0">
              <h1 className="mb-0 fw-bold">
                {t("changeTitleLanguage.title2")}
              </h1>
            </div>
            <div>
              <nav>
                <ul
                  className="nav nav-pills nav-scroll border-bottom-0 gap-1 "
                  id="nav-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("iphone")}
                      className="nav-link active fw-bold"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-fruitsandveg"
                      role="tab"
                      aria-selected="true"
                    >
                      iPhone
                    </Link>
                  </li>
                  <li className="nav-item " role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("ipad")}
                      className="nav-link fw-bold"
                      id="nav-snackMunchies-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-snackMunchies"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      iPad
                    </Link>
                  </li>
                  <li className="nav-item " role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("imac")}
                      className="nav-link fw-bold"
                      id="nav-bakery-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-bakery"
                      role="tab"
                      aria-controls="nav-bakery"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      iMac
                    </Link>
                  </li>
                  <li className="nav-item " role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("macbook")}
                      className="nav-link fw-bold"
                      id="nav-tea-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tea"
                      role="tab"
                      aria-controls="nav-tea"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Mackbook
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("watch")}
                      className="nav-link fw-bold"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Watch
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("airpods")}
                      className="nav-link fw-bold"
                      id="nav-drinks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-controls="nav-drinks"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      AirPods
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("tv")}
                      className="nav-link fw-bold"
                      id="nav-drinks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-controls="nav-drinks"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      TV & Home
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      onClick={() => handleFilter("accessories")}
                      className="nav-link fw-bold"
                      id="nav-drinks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-controls="nav-drinks"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Accessories
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="best-seller-list mt-2">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
            customTransition="all 1s"
          >
            {randomizedProducts.map((item, i) => (
              <BestSellerCard
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
            to="/filterpage"
            className="btn btn-outline-danger rounded-0 w-100 d-flex justify-content-center align-items-center p-3 fw-bold"
          >
            {t("changeBtnLanguage.showmorebtn")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
