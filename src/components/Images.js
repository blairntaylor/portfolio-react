import React from "react";
import Image1 from "../components/img/img1.jpg";
import Image2 from "../components/img/img2.jpg";
import Image3 from "../components/img/img3.jpg";

function Images() {
  return (
    <div className="row">
      <pic-container>
        <img src={Image1} alt="" height="350" />
        <img src={Image2} alt="" height="350" />
        <img src={Image3} alt="" height="350" />
      </pic-container>
    </div>
  );
}

export default Images;
