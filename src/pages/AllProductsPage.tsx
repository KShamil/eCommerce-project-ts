import React, { useState, useEffect, useContext, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import "../config/i18n";
import { useTranslation } from "react-i18next";
import MainCard from "../components/Cards/MainCard";
import _ from "lodash";

const AllProductsPage = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products] = useContext(ProductContext);
  const [displayedProducts, setDisplayedProducts] = useState<number>(5);
  const { t, i18n } = useTranslation();

  const randomizedProducts = useMemo(() => _.shuffle(products), [products]);

  const LoadMoreProducts = (): void => {
    setDisplayedProducts(displayedProducts + 5);
  };

  return (
    <>
      <section className="products container">
        <div className="products-blog w-100">
          <h1 className="title fw-bold mt-5">
            {t("changeTitleLanguage.title1")}
          </h1>
          <div className="products-list mt-3">
            <div className="product-items mt-2">
              {randomizedProducts
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
            {displayedProducts < randomizedProducts.length && (
              <div className="load-more-btn d-flex justify-content-center align-items-center mt-2">
                <button
                  onClick={LoadMoreProducts}
                  className="btn btn-outline-danger rounded-2 p-3 fw-bold"
                >
                  {t("changeBtnLanguage.loadmorebtn")}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProductsPage;
