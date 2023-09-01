import Image from "next/image";
import React from "react";
import m1 from "../../../../images/m.png";
import m2 from "../../../../images/m2.png";
import m3 from "../../../../images/m3.png";
import m4 from "../../../../images/m4.png";
import m5 from "../../../../images/m5.png";
import kisok from "../../../../images/kisok.png";

function Wellness(props) {
  return (
    <div className="container">
      <div style={{ marginBottom: "100px" }}>
        <h2 className="mb-3">Our WELLNESS Products</h2>
        <p className="mb-3" style={{ fontSize: "20px", marginBottom: "50px" }}>
          With more then 7 years experience in kiosks and interactive technology
          systems,CreateAbit now offers a wide rang of COVID WELLNESS products
          for businesses to make their enviroment safer for customers and
          employees. Get your body temperature screening devices and automatic
          hand sanitizer stations from the most trusted source in North America
        </p>
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-lg-12 col-md-2 col-sm-2">
            <Image src={m1} alt="m" style={{ width: "250px" }} />
            <Image src={m2} alt="m2" style={{ width: "250px" }} />
            <Image src={m3} alt="m3" style={{ width: "250px" }} />
            <Image src={m4} alt="m4" style={{ width: "250px" }} />
            <Image src={m5} alt="m5" style={{ width: "250px" }} />
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{
          marginBottom: "100px",
        }}
      >
        <div className="col-lg-6">
          <h2 style={{ marginBottom: "50px" }}>Self Ordering Kisok</h2>
          <Image src={kisok} alt="" style={{ width: "500px" }} />
        </div>
        <div style={{ width: "550px" }}>
          <h2 style={{ marginBottom: "50px" }}>What we Offer</h2>
          <p className="mt-8" style={{ fontSize: "20px" }}>
            Our experience in fulfilling the growth needs of businesses in New
            York City has prepared us to expand our services beyond borders.
            With our performance driven team and carefully planned creative
            marketing strategies, createAbit designs became a trusted name in
            the industry. Nevertheless, we believe there is always more to
            achieve and that is why we entered Washington DC and its surrounding
            areas to help businesses achieve success in a creative fashion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
