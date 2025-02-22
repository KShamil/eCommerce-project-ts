import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userData from "../data/userData";
import { useState } from "react";
import signIn from "../assets/img/sign-in-img/sign-in.jpg";
import { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
// import SignInSide from "../components/Sign-in";

const SignIn = ({ onUserLogin }: { onUserLogin: (name: string) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // onUserLogin(user.displayName);
        navigate("/dashboard");
      })
      .catch((error) => {
        setText("Email or password is wrong");
      });
  };
  return (
    <>
      <div className="container"></div>
      <div className="sign-in row justify-content-center align-items-center p-5">
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
          <img src={signIn} alt="error" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
          <div className="mb-lg-9 mb-5">
            <h1 className="mb-1 h2 fw-bold">Sign in</h1>
            <p className="mt-2">Welcome back!</p>
          </div>
          <form onSubmit={formSubmit}>
            <span className="text-danger mt-2">{text}</span>
            <div className="row g-3 mt-2">
              <div className="col-12">
                <input
                  onChange={handleEmailChange}
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
                    onChange={handlePasswordChange}
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
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  Forgot password?
                  <Link to="/reset" className="text-primary mx-1">
                    Reset It
                  </Link>
                </div>
              </div>
              <div className="col-12 d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
              <div>
                Don’t have an account?
                <Link to="/signup" className="text-primary mx-1">
                  {" "}
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
