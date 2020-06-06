import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="container">
        <div className="row px-3">
          <div className="col-3">
            <ul className="list-unstyled">
              <li>
                <Link className="mb-2" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="mb-2" to="/menu">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h3>Contact Us</h3>
            <div className="pl-4">
              <h5>
                <span className="fa fa-phone"></span> :{" "}
                <a href="tel:+911234567890">+91 1234567890</a>
              </h5>
              <h5>
                <span className="fa fa-envelope"></span> :{" "}
                <a href="mailto:solitude@gmail.come">solitude@gmail.com</a>
              </h5>
              <h5>
                <i className="fa fa-map-marker"></i> : #1234, Tower No. 9,
                <br />
                East Block, Taste Treat,
                <br />
                Solitude Island
              </h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-4">
          <span className="fa fa-lg fa-facebook-official mx-4"></span>
          <span className="fa fa-lg fa-twitter mx-4"></span>
          <span className="fa fa-lg fa-instagram mx-4"></span>
        </div>
        <div className="row justify-content-center">
          <p className="mb-1">Copyright &copy; 2020, Solitude Restaurant</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
