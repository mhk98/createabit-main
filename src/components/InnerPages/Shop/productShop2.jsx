import {
  faFingerprint,
  faHandsHelping,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import product from "../../../../images/61oEhC1IFYL._SX425_.png";
import product1 from "../../../../images/51tO9J706CL._SY355_.jpg";

const ProductShop2 = () => {
  return (
    <div>
      {/* Banner part start */}
      <div className="productshop_banner ">
        <div className="text-middle">
          <h1>“The Ultimate 3D Advertising</h1>
          <h1>Display Machine”</h1>
        </div>
      </div>
      {/* Banner part end */}

      {/* Branding part start */}
      <div
        className="mb-50 productshop_brand"
        style={{ backgroundColor: "white", color: "black", padding: "60px" }}
      >
        <div>
          <h3>Grow your brand</h3>
          <h3>in the palm of</h3>
          <h3>your hand</h3>
        </div>
        <div>
          <FontAwesomeIcon
            style={{
              width: "20px",
              color: "white",
              backgroundColor: "black",
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              padding: "15px",
            }}
            icon={faUserSecret}
          />
          <h5>3D advertising</h5>
          <p style={{ color: "black" }}>An open eye 3D experience</p>
        </div>
        <div>
          <FontAwesomeIcon
            style={{
              width: "20px",
              color: "white",
              backgroundColor: "black",
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              padding: "15px",
            }}
            icon={faUserSecret}
          />
          <h5>3D advertising</h5>
          <p style={{ color: "black" }}>An open eye 3D experience</p>
        </div>
        <div>
          <FontAwesomeIcon
            style={{
              width: "20px",
              color: "white",
              backgroundColor: "black",
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              padding: "15px",
            }}
            icon={faHandsHelping}
          />
          <h5>3D advertising</h5>
          <p style={{ color: "black" }}>An open eye 3D experience</p>
        </div>
      </div>
      {/* Branding part end */}

      {/* Benefit start */}
      <div>
        <h1 className="pt-50 pb-40">Benefits of 3D holographic Sign</h1>

        <div className="benefit_main">
          <div>
            <div className="benefit">
              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />
            </div>
            <div className="benefit">
              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />
            </div>
            <div className="benefit">
              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />
            </div>
          </div>
          <div>
            <Image src={product} alt="" />
          </div>
          <div>
            <div className="benefit1">
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />

              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
            </div>
            <div className="benefit1">
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />

              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
            </div>
            <div className="benefit1">
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />

              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit end */}

      {/* Products start */}
      <div
        style={{
          backgroundColor: "white",
          paddingBottom: "180px",
          paddingTop: "90px",
          color: "black",
          textAlign: "center",
        }}
      >
        <h1>More About Our Products</h1>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
        <p style={{ color: "black", paddingBottom: "60px" }}>
          {" "}
          sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="product_review">
          <div>
            <Image src={product1} alt="" />
          </div>
          <div style={{ textAlign: "left" }}>
            <h2>42 cm (2 Blades)</h2>
            <p style={{ color: "black" }}>
              Multi-functional - Use 42cm LED fan to have a 42 cm length
              holographic effect.
            </p>
            <p style={{ color: "black" }}>
              Immediately attract people's attention.
            </p>
            <p style={{ color: "black", marginTop: "20px" }}>
              Easy To Use -Easy to install, you can customize your video or
              pictures to display,
            </p>
            <p style={{ color: "black", marginBottom: "20px" }}>
              it will bring a vivid 3d advertising display in the air.
            </p>
            <p style={{ color: "black", marginBottom: "20px" }}>
              Display Size - Displaying dimension: 16.53 inches;
            </p>
            <p style={{ color: "black", marginBottom: "20px" }}>
              LED lamps: 224;
            </p>
            <p style={{ color: "black", marginBottom: "20px" }}>
              Resolution(pixel):450*224.
            </p>
            <p style={{ color: "black" }}>
              Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with
              black background.
            </p>
          </div>
        </div>
      </div>
      {/* Products end */}
    </div>
  );
};

export default ProductShop2;
