import { Link } from "react-router-dom";
import resetPass from "../assets/img/sign-in-img/reset_pass.png";
import { useEffect } from "react";

const ResetPasswordPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="reset-password row justify-content-center align-items-center p-5">
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
          <img src={resetPass} alt="error" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
          <div>
            <div className="mb-lg-9 mb-5">
              <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
              <p>
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </p>
            </div>
            <form>
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-12 d-grid gap-2">
                  {" "}
                  <button type="submit" className="btn btn-success">
                    Reset Password
                  </button>
                  <Link
                    to="/authentication"
                    className="btn btn-outline-primary"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
