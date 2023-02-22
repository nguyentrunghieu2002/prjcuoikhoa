import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <div className="d-flex container">
          <img
            className="pt-3"
            src="https://kfcvn-static.cognizantorderserv.com/images/web/kfc-logo.svg?v=5.0"
            alt="Bootstrap"
            width={78}
            height={78}
          />

          <div className="d-flex align-item-center cc ">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        THỰC ĐƠN
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        KHUYẾN MÃI
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        HỆ THỐNG NHÀ HÀNG
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
