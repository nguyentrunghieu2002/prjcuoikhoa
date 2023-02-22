import React from "react";
import "./abc.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>VỀ KFC</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
          </div>
          <div className="col-md-3">
            <h3>DANH MỤC MÓN ĂN</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Consectetur adipiscing elit</a>
              </li>
              <li>
                <a href="#">Aenean euismod bibendum laoreet</a>
              </li>
              <li>
                <a href="#">Proin gravida dolor sit amet lacus</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>LIÊN HỆ KFC</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Lorem ipsum dolor sit amet</a>
              </li>
              <li>
                <a href="#">Consectetur adipiscing elit</a>
              </li>
              <li>
                <a href="#">Aenean euismod bibendum laoreet</a>
              </li>
              <li>
                <a href="#">Proin gravida dolor sit amet lacus</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
            <p>
              <i className="fas fa-phone" /> 1-555-555-1212
            </p>
            <p>
              <i className="fas fa-envelope" /> info@example.com
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p>© 2023 - My Website</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-right">
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
