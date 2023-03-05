import signUp from "../assets/img/sign-in-img/sign-up.avif";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/signin");
      })
      .catch((error) => {
        setError("Please enter correct information");
      });
  };
  return (
    <>
      <div className="sign-up row justify-content-center align-items-center p-5">
        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
          <img src={signUp} alt="error" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
          <div className="mb-lg-9 mb-5">
            <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
            <p>Welcome to AppleStore! Enter your email to get started.</p>
            <span className="text-danger">{error}</span>
          </div>
          <form onSubmit={handleCreateUser}>
            <div className="row g-3">
              {/* <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required
                />
              </div> */}
              {/* <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required
                />
              </div> */}
              <div className="col-12">
                <input
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                <button type="submit" className="btn btn-primary">
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
