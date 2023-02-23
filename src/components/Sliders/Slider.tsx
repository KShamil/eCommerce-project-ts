import photo1 from "../../assets/img/first-slider-photo/banner-1.webp";
import photo2 from "../../assets/img/first-slider-photo/banner-2.webp";
import photo3 from "../../assets/img/first-slider-photo/banner-3.webp";
import photo4 from "../../assets/img/first-slider-photo/banner-4.webp";
import photo5 from "../../assets/img/first-slider-photo/banner-5.webp";
import photo6 from "../../assets/img/first-slider-photo/banner-6.webp";
import photo7 from "../../assets/img/first-slider-photo/banner-7.webp";
import photo8 from "../../assets/img/first-slider-photo/banner-8.webp";
import photo9 from "../../assets/img/first-slider-photo/banner-9.webp";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-dark"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={photo1} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo2} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo3} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo4} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo5} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo6} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo7} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo8} className="d-block w-100" alt="error" />
            </div>
            <div className="carousel-item">
              <img src={photo9} className="d-block w-100" alt="error" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
