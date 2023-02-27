import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userData from "../data/userData";
import { useState } from "react";
import signIn from '../assets/img/sign-in-img/sign-in.png';
import { useEffect } from "react";
// import SignInSide from "../components/Sign-in";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !password) {
      setText('Fill in the input');
    } else {
      setText('');
      if (userData.username === name && userData.password === password) {
        navigate('/dashboard');
      } else {
        setText('Email or password is wrong');
      }
    }
  };
  return (
    <>
    <div className="container">
    </div>
      <div className="sign-in row justify-content-center align-items-center p-5">
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
          <img
            src={signIn}
            alt="error"
            className="img-fluid"
          />
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
                <input onChange={handleNameChange}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-12">
                <div className="password-field position-relative">
                  <input onChange={handlePasswordChange}
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
                  <Link to="/reset" className="text-success mx-1">Reset It</Link>
                </div>
              </div>
              <div className="col-12 d-grid">
                <button type="submit" className="btn btn-success">
                  Sign In
                </button>
              </div>
              <div>
                Don’t have an account?
                <Link to="/signup" className="text-success mx-1"> Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
