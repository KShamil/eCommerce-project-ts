import React,{FC} from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import azFlag from "../../assets/img/language-btn-img/azerbaijan-flag-round-icon.webp";
import ruFlag from "../../assets/img/language-btn-img/russia-flag-round-icon.webp";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { Badge } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Header = (props:any) => {
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

  return (
    <>
      <header className="header fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="" className="navbar-brand fw-bold">
              <i className="fa-brands fa-apple mx-1 fs-1"></i>AppleStore
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
                        color: isActive ? "red" : "",
                      };
                    }}
                    to="/"
                    className="nav-link"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/corporative"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }}
                    className="nav-link"
                  >
                    Corporate Sales
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/shops"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }}
                    className="nav-link"
                
                  >
                    Shops
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/service"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }}
                    className="nav-link"
                
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }}
                    to="/faqs"
                    className="nav-link"
            
                  >
                    FAQs
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex me-2">
                <span className="contact-number fs-5 fw-bold">
                  <i className="fa-solid fa-phone-volume fs-3"></i> *1747
                </span>
              </div>
              <div className="d-flex me-2">
                <Link
                  to="/signin"
                  className="text-decoration-none text-danger"
                  type="submit"
                >
                  <i className="fa-regular fa-user fs-4"></i>
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
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item dropdown btn btn-danger">
                  <Link
                    to=""
                    className="nav-link fs-6 text-white"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Categories
                  </Link>

                  <ul className="dropdown-menu dropdown-menu my-2">
                    <li>
                      <Link to="" className="dropdown-item">
                        Mac
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        iPad
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        onClick={() => props.handleCategorySelect("iphone")}
                        className="dropdown-item"
                      >
                        iPhone
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        Watch
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        AirPods
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        TV & Home
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mx-auto col-6" role="search">
                <input
                  onChange={props.searchValue}
                  className="form-control p-2 rounded-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button onClick={props.searchValue} className="btn btn-success rounded-pill mx-2">Search</button> */}
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 text-danger"
                    aria-current="page"
                    to="/wishlist"
                  >
                    <FavoriteIcon/>
                    <p className="totalItem text-danger fw-bold">
                    <Badge badgeContent={totalWishlistItems} color="secondary"></Badge>
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shopping" className="nav-link fs-5">
                    <ShoppingCartCheckoutIcon/>
                    <p className="totalItem text-danger fw-bold">
                      <Badge badgeContent={totalItems} color="secondary"></Badge>
                    </p>
                  </Link>
                </li>
                <li className="flag nav-item">
                  <i className="nav-link fs-5 btn-az">
                    <img src={azFlag} alt="" />
                  </i>
                </li>
                <li className="flag nav-item">
                  <i className="nav-link fs-5 btn-eng">
                    <img src={ruFlag} alt="" />
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
