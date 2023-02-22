import React from "react";
import Body4B from "./Body4B";

const Body4C = (props) => {
  const { product } = props;
  return (
    <div className="col ">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <div className="d-flex justify-content-between">
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
            <button className="btn btn-primary w-100 mt-5 rounded-pill">
              BUY
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body4C;
