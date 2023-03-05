import { Link, useParams } from "react-router-dom";
import DetailsAddProductButton from "../components/Buttons/DetailsAddProductButton";
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect } from "react";

const DetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  interface MyRouteParams extends Record<string, string | undefined> {}

  const [products] = useContext(ProductContext);
  const { id } = useParams<MyRouteParams>();
  const detailsItems = products.find((p) => p.id === id);
  return (
    <>
      <div className="details container mt-5">
        <div className="title-link d-flex justify-content-start align-items-center gap-3">
          <div className="link-container">
            <Link to="/" className="link text-decoration-none text-secondary">
              Home
            </Link>
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div className="title-container">
            <h5 className="title my-1">Details</h5>
          </div>
        </div>
        <div className="details-content  row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="details-swiper col-10 col-sm-8 col-lg-6">
            <div className="slider">
              <div
                id="carouselExampleControls"
                className="carousel slide carousel-dark"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active p-5">
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
            <h1 className="fw-bold mb-5">{detailsItems?.title}</h1>

            <h3
              className="product_price text-danger fw-bold mb-5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {detailsItems?.price} azn
            </h3>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <DetailsAddProductButton addProduct={detailsItems} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="col-md-12 container">
          <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="product-tab"
                data-bs-toggle="tab"
                data-bs-target="#product-tab-pane"
                type="button"
                role="tab"
                aria-controls="product-tab-pane"
                aria-selected="true"
              >
                Product Details
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="details-tab"
                data-bs-toggle="tab"
                data-bs-target="#details-tab-pane"
                type="button"
                role="tab"
                aria-controls="details-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                Information
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade active show"
              id="product-tab-pane"
              role="tabpanel"
              aria-labelledby="product-tab"
              tabIndex={0}
            >
              <div className="my-8 mt-2">
                <div className="mb-5">
                  <h4 className="mb-1">Product</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis est maiores delectus officiis pariatur unde quam
                    corporis voluptatem at facilis impedit maxime, beatae,
                    accusamus porro perferendis placeat aspernatur quia soluta
                    nemo, quisquam dolor adipisci ipsum. Vel fugiat rem error
                    porro necessitatibus eaque aspernatur harum aperiam. Cumque
                    ex dignissimos quae nostrum molestiae amet harum odit nam
                    rerum voluptates nihil pariatur, veritatis a est culpa
                    laboriosam. Aspernatur, possimus dolor vel hic aut debitis
                    eaque amet neque inventore quibusdam accusamus perspiciatis
                    officia veniam quo ea porro reprehenderit distinctio nihil
                    quae culpa aperiam commodi doloribus eum atque. Blanditiis
                    eveniet nam nemo, laboriosam mollitia quasi! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Veritatis est
                    maiores delectus officiis pariatur unde quam corporis
                    voluptatem at facilis impedit maxime, beatae, accusamus
                    porro perferendis placeat aspernatur quia soluta nemo,
                    quisquam dolor adipisci ipsum. Vel fugiat rem error porro
                    necessitatibus eaque aspernatur harum aperiam. Cumque ex
                    dignissimos quae nostrum molestiae amet harum odit nam rerum
                    voluptates nihil pariatur, veritatis a est culpa laboriosam.
                    Aspernatur, possimus dolor vel hic aut debitis eaque amet
                    neque inventore quibusdam accusamus perspiciatis officia
                    veniam quo ea porro reprehenderit distinctio nihil quae
                    culpa aperiam commodi doloribus eum atque. Blanditiis
                    eveniet nam nemo, laboriosam mollitia quasi!
                  </p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1"></h5>
                  <p className="mb-0"></p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1"></h5>
                  <p className="mb-0"></p>
                </div>
                <div className="mb-5">
                  <h5 className="mb-1"></h5>
                  <p className="mb-0"></p>
                </div>
                <div>
                  <h5 className="mb-1"></h5>
                  <p className="mb-0"></p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="details-tab-pane"
              role="tabpanel"
              aria-labelledby="details-tab"
              tabIndex={0}
            >
              <div className="my-8 container mt-2">
                <div className="row">
                  <div className="col-12">
                    <h4 className="mb-4">Characteristics</h4>
                  </div>
                  <div className="col-12 col-lg-6">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>Technology</th>
                          <td>GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
                        </tr>
                        <tr>
                          <th>Announced</th>
                          <td>2022, September 07</td>
                        </tr>
                        <tr>
                          <th>Status</th>
                          <td>Available. Released 2022, September 16</td>
                        </tr>
                        <tr>
                          <th>Dimensions</th>
                          <td>147.5 x 71.5 x 7.9 mm (5.81 x 2.81 x 0.31 in)</td>
                        </tr>
                        <tr>
                          <th>Weight</th>
                          <td>206 g (7.27 oz)</td>
                        </tr>
                        <tr>
                          <th>Build</th>
                          <td>
                            Glass front (Corning-made glass), glass back
                            (Corning-made glass), stainless steel frame
                          </td>
                        </tr>
                        <tr>
                          <th>SIM</th>
                          <td>
                            Nano-SIM and eSIM - International Dual eSIM with
                            multiple numbers - USA Dual SIM (Nano-SIM, dual
                            stand-by) - China IP68 dust/water resistant (up to
                            6m for 30 min) Apple Pay (Visa, MasterCard, AMEX
                            certified)
                          </td>
                        </tr>
                        <tr>
                          <th>Type</th>
                          <td>
                            9LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby
                            Vision, 1000 nits (typ), 2000 nits (HBM)
                          </td>
                        </tr>
                        <tr>
                          <th>Size</th>
                          <td>
                            6.1 inches, 91.7 cm2 (~87.0% screen-to-body ratio)
                          </td>
                        </tr>
                        <tr>
                          <th>Resolution</th>
                          <td>
                            1179 x 2556 pixels, 19.5:9 ratio (~460 ppi density)
                          </td>
                        </tr>
                        <tr>
                          <th>Protection</th>
                          <td>Ceramic Shield glass Always-On display</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-lg-6">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>OS</th>
                          <td>iOS 16, upgradable to iOS 16.3</td>
                        </tr>
                        <tr>
                          <th>Chipset</th>
                          <td>Apple A16 Bionic (4 nm)</td>
                        </tr>
                        <tr>
                          <th>CPU</th>
                          <td>
                            Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)
                          </td>
                        </tr>
                        <tr>
                          <th>GPU</th>
                          <td>Apple GPU (5-core graphics)</td>
                        </tr>
                        <tr>
                          <th>Card slot</th>
                          <td>No</td>
                        </tr>
                        <tr>
                          <th>Internal</th>
                          <td>
                            128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB
                            RAM NVMe
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="sellerInfo-tab-pane"
              role="tabpanel"
              aria-labelledby="sellerInfo-tab"
              tabIndex={0}
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
