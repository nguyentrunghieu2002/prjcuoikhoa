import React from "react";
import product from "./Body3B";

const Body3C = (props) => {
  const { product } = props;

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.imgKfc} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <a href="#" className="text-decoration-none ">
              {product.txt}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body3C;
