import Image from "next/image";
import product1 from "../../../../images/LCD-VIDEO-WALL-47 (1).jpg";
import product2 from "../../../../images/Wall-Mount-Models.jpg";

import Link from "next/link";
import product3 from "../../../../images/42-inch-lcd-digital-signage.jpg";
import product5 from "../../../../images/Mirror-advertising-player.jpg";
import product6 from "../../../../images/Touch-Screen-Kiosk2.jpg";
import product4 from "../../../../images/Touch-table3.jpg";
const ProductShop1 = () => {
  return (
    <div className="container">
      <div
        className="row  justify-center align-middle mx-auto gap-5"
        style={{ margin: "160px 0px" }}
      >
        <div className="col-lg-3">
          <Image src={product1} alt="" />
          <h4>Lcd Wall Video</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>

          <div className="purchase mt-4">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={product2} alt="" />
          <h4>Wall Mount display</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="purchase mt-4">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={product3} alt="" />
          <h4>Stand Alone Signage</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="purchase mt-4">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={product4} alt="" />
          <h4>Touch Table</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="purchase mt-4">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={product5} alt="" />
          <h4>OutDoor Digital Synage</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="purchase mt-4">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={product6} alt="" />
          <h4>Multimedia Kiosk</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="purchase mt-4">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShop1;
