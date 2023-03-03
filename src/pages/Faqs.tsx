import Accordion from "../components/Accordion/Accordion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="faqs-page container p-5">
        <div className="title-link d-flex justify-content-start align-items-center gap-3">
          <div className="link-container">
            <Link to="/" className="link text-decoration-none text-secondary">
              Home
            </Link>{" "}
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div className="title-container">
            <h5 className="title my-1">FAQs</h5>
          </div>
        </div>
        <h1 className="faqs_title text-start mt-5">Frequently asked questions</h1>
        <div className="faqs_content">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default Faqs;
