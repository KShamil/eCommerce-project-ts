import { Link } from "react-router-dom";

const Footer:React.FC = () => {
  return (
    <>
      <div className="footer mt-5">
        <footer className="container py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="footer-title">Information</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/corporative" className="nav-link p-0">
                    Corporate Sales
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/shops" className="nav-link p-0">
                    Shops
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/services" className="nav-link p-0">
                    Services
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="faqs" className="nav-link p-0">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="footer-title">For clients</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="" className="nav-link p-0">
                    Rules for using the site
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="" className="nav-link p-0">
                    Guarantees
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="" className="nav-link p-0">
                    Complaint management policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="" className="nav-link p-0">
                    A guarantee of the best price!
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="footer-title">Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="" className="nav-link p-0">About company</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="" className="nav-link p-0">Career</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <h5>Contacts</h5>
              <div className="contacts mt-3">
              <span><i className="fa-solid fa-mobile-screen-button fs-4"></i> *1747</span>
              <span>
                <Link
                  to="shops"
                  className="mx-5 text-decoration-none text-dark"
                >
                  <i className="fa-solid fa-location-dot fs-4"></i> Our stores are on the map
                </Link>
              </span>
              <p className="mt-3"><i className="fa-solid fa-phone-volume"></i> 055-680-17-47</p>
              </div>
              <form>
                <h5 className="subscribe_title">Subscribe to our newsletter</h5>
                <p className="subscribe_descr">
                  Monthly digest of what's new and exciting from us.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button
                    className="subscribe_btn btn btn-primary"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="copyright">© 2023 Apple Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-4">
                <Link to="" className="link-dark fs-3">
                <i style={{color:"#1DA1F2"}} className="fa-brands fa-twitter"></i>
                </Link>
              </li> 
              <li className="ms-4">
                <Link to="" className="link-dark fs-3">
                <i style={{color:"#d6249f"}} className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li className="ms-4">
                <Link to="" className="link-dark fs-3">
                <i style={{color:"#4867AA"}} className="fa-brands fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
