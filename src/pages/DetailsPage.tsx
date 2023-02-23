import { Link, useParams } from "react-router-dom";
import DetailsAddProductButton from "../components/Buttons/DetailsAddProductButton";
import products, { ProductType } from "../data/productsData";
import { useEffect } from "react";

const DetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  interface MyRouteParams extends Record<string, string | undefined> {}

  const { id } = useParams<MyRouteParams>();
  const detailsItems = products.find((p) => p.id === id);
  return (
    <>
      <div className="details container mt-5">
        <Link to="/" className="back-btn mt-5">
          <i className="fa-solid fa-arrow-left-long"></i>
        </Link>
        <div className="details-content  row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="details-swiper col-10 col-sm-8 col-lg-6">
            <div className="slider">
              <div
                id="carouselExampleControls"
                className="carousel slide carousel-dark"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={detailsItems?.photo}
                      className="d-block w-100"
                      alt="error"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={detailsItems?.photo2}
                      className="d-block w-100"
                      alt="error"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={detailsItems?.photo3}
                      className="d-block w-100"
                      alt="error"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={detailsItems?.photo4}
                      className="d-block w-100"
                      alt="error"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-primary lh-1 mb-3">
              {detailsItems?.title}
            </h1>

            <h3
              className="product_price text-danger fw-bold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {detailsItems?.price} azn
            </h3>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <DetailsAddProductButton addProduct={detailsItems} />
              <Link
                to={`/${id}/selling`}
                type="button"
                className="btn btn-outline-danger btn-lg px-4 me-md-2"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
