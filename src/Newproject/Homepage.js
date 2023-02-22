import React from "react";
import BodyB from "./Body4B";
import Header from "./Header";
import Body1 from "./Body1";
import products from "./Data";
import Body2 from "./Body2";
import Body3B from "./Body3B";
import kfc from "./NewData";
import sanpham from "./NewData";

import Body4B from "./Body4B";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    //header
    //body
    //footer
    <div>
      <div>
        <Header />
        <Body1 />
        <Body2 />
        <Body3B sanpham={sanpham} />

        <Body4B products={products} />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
