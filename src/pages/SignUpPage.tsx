import signUp from '../assets/img/sign-in-img/sign-up.png';
import { useEffect } from "react";

const SignUpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="sign-up row justify-content-center align-items-center p-5">
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
          <img
            src={signUp}
            alt="error"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
          <div className="mb-lg-9 mb-5">
            <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
            <p>Welcome to AppleStore! Enter your email to get started.</p>
          </div>
          <form>
            <div className="row g-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-12">
                <div className="password-field position-relative">
                  <input
                    type="password"
                    id="fakePassword"
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                  <span>
                    <i id="passwordToggler" className="bi bi-eye-slash" />
                  </span>
                </div>
              </div>
              <div className="col-12 d-grid">
                <button type="submit" className="btn btn-success">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
