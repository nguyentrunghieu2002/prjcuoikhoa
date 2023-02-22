import React from "react";
import sanpham from "./NewData";
import Body3C from "./Body3C";

const Body3B = (props) => {
  const { sanpham } = props;

  return (
    <div className="container">
      <h1>DANH MỤC MÓN ĂN</h1>
      <div className="row row-cols-md-4 ">
        {sanpham.map((pItem) => {
          return <Body3C product={pItem} />;
        })}
      </div>
    </div>
  );
};

export default Body3B;
