import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import azFlag from "../../assets/img/language-btn-img/azerbaijan-flag-round-icon.webp";
import engFlag from "../../assets/img/language-btn-img/england-flag.png";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useTranslation } from "react-i18next";
import '../../config/i18n';
import MyDialog from "../Dialog/Dialog";

const Header = ({ userName, searchValue }: { userName: string, searchValue: any }) => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const [mode, setMode] = useState<string>(
    localStorage.getItem("mode") || "light-mode"
  );
  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.className = mode;
  }, [mode]);

  const toggleMode = () => {
    const newMode: string = mode === "light-mode" ? "dark-mode" : "light-mode";
    setMode(newMode);
  };

  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <header className="header fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="" className="navbar-brand fw-bold">
              <i className="fa-brands fa-apple"></i>
            </Link>
            <button
              className="navbar-toggler bg-body"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "blue" : "",
                      };
                    }}
                    to="/"
                    className="nav-link"
                    aria-current="page"
                  >
                    {t("changeNavLanguage.navlink1")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/corporative"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "blue" : "",
                      };
                    }}
                    className="nav-link"
                  >
                    {t("changeNavLanguage.navlink2")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/shops"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "blue" : "",
                      };
                    }}
                    className="nav-link"
                  >
                    {t("changeNavLanguage.navlink3")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/service"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "blue" : "",
                      };
                    }}
                    className="nav-link"
                  >
                    {t("changeNavLanguage.navlink4")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "blue" : "",
                      };
                    }}
                    to="/faqs"
                    className="nav-link"
                  >
                    {t("changeNavLanguage.navlink5")}
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex me-2">
                <span className="contact-number fs-5 fw-bold">
                  <i className="fa-solid fa-phone-volume fs-3"></i> *1747
                </span>
              </div>
              <div className="user-link d-flex me-2">
                <Link
                  to="/signin"
                  className="text-decoration-none"
                  type="submit"
                >
                  {userName ? (<div className="user d-flex flex-column justify-content-center align-items-center">
                    <span><i className="fa-regular fa-user"></i></span>
                  </div>) : (<div className="user d-flex flex-column justify-content-center align-items-center">
                    <span><i className="fa-regular fa-user"></i></span>
                    <span>{userName}</span>
                  </div>)}
                </Link>
              </div>
              <div className="d-flex me-2 my-2">
                <Link to="#" className="mode-btn-container" type="submit">
                  <i onClick={toggleMode} className="mode-btn"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-bottom">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav location">
                <MyDialog/>
              </ul>
              <form className="d-flex mx-auto col-6" role="search">
                <input
                  onChange={searchValue}
                  className="form-control p-2 rounded-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 text-danger"
                    aria-current="page"
                    to="/wishlist"
                  >
                    <FavoriteIcon />
                    <p className="totalItem text-danger fw-bold">
                      <Badge
                        badgeContent={totalWishlistItems}
                        color="secondary"
                      ></Badge>
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shopping" className="nav-link fs-5">
                    <ShoppingCartCheckoutIcon />
                    <p className="totalItem text-danger fw-bold">
                      <Badge
                        badgeContent={totalItems}
                        color="secondary"
                      ></Badge>
                    </p>
                  </Link>
                </li>
                <li className="flag nav-item">
                  <i
                    onClick={() => {
                      handleChangeLanguage("az");
                    }}
                    className="nav-link fs-5 btn-az"
                  >
                    <img src={azFlag} alt="" />
                  </i>
                </li>
                <li className="flag nav-item">
                  <i
                    onClick={() => {
                      handleChangeLanguage("en");
                    }}
                    className="nav-link fs-5 btn-eng"
                  >
                    <img src={engFlag} alt="" />
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
