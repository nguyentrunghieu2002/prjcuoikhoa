import React from "react";
import products from "./Data";
import Body4C from "./Body4C";

const Body4B = (props) => {
  const { products } = props;
  return (
    <div className="container">
      <hr></hr>
      <h1>MENU</h1>
      <div className="row row-col-3">
        {products.map((food) => {
          return <Body4C product={food} />;
        })}
      </div>
    </div>
  );
};

export default Body4B;
