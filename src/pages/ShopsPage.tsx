import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ShopsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="shops p-4">
        <div className="content container">
          <div className="top-link d-flex justify-content-between align-items-center gap-3">
            <div className="title-link d-flex justify-content-start align-items-center gap-3">
              <div className="link-container">
                <Link to="/" className="link text-decoration-none">
                  Home
                </Link>{" "}
                <i className="fa-solid fa-angle-right"></i>
              </div>
              <div className="title-container">
                <h5 className="title my-1">Shops</h5>
              </div>
            </div>
            <div className="work-time">
              Work time:
              <br />
              Every day: 10:00-21:00
            </div>
          </div>
          <div className="map mt-5">
            <iframe
              title="title"
              src="https://www.google.com/maps/d/embed?mid=1aWSWCFcxK1EX6-f31JeWOV3pmaeDVig&ehbc=2E312F"
            ></iframe>
          </div>
        </div>
        <div className="shops-addres container mt-3">
          <h2 className="fs-1">Baku city</h2>
          <div className="shops-list">
            <p className="list-item">
              <span className="fw-bold">Apple STORE "Metro January 20"</span>
              <br />
              Nasimi district, Moskovsky pr., 52
            </p>
            <p className="list-item mt-3">
              <span className="fw-bold">
                Apple STORE "Circle 3rd microdistrict"{" "}
              </span>
              <br />
              Nasimi district, st. A. Mustafaeva, 8
            </p>
            <p className="list-item mt-3">
              <span className="fw-bold">Apple STORE "Metro Azadlig"</span>
              <br />
              Binagadi district, Binagadi highway, 200E, block 3123
            </p>
            <p className="list-item mt-3">
              <span className="fw-bold">Apple STORE "Metro Ganjlik" </span>
              <br />
              Narimanovskiy district, st. F. H. Khoysky, 86
            </p>
            <p className="list-item mt-3">
              <span className="fw-bold">Apple STORE "Metro Sahil"</span>
              <br />
              Sabail district, intersection of st. U. Gadzhibekov and Bul-Bul
              avenue, 207th quarter
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopsPage;
