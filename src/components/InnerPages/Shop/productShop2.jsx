import {
  faFingerprint,
  faHandsHelping,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import product1 from "../../../../images/51tO9J706CL._SY355_.jpg";
import product from "../../../../images/61oEhC1IFYL._SX425_.png";
import product2 from "../../../../images/B1158671887.jpg";

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

        {/* product reveiw part start */}

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

        <div className="product_review">
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

          <div>
            <Image src={product2} alt="" />
          </div>
        </div>

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

        {/* product reveiw part end */}
      </div>
      {/* Products end */}

      {/* Background video part start */}

      <div className="productshop_video ">
        <div>
          <h1>Watch The Video</h1>
          <p>Want a thrilling vision of your eye?</p>
          <p>Have a look at the video that mesmerize your vision.</p>
        </div>
      </div>
      {/* Background video part end */}

      {/* Faq part start */}
      <div
        style={{ backgroundColor: "white", width: "100%", paddingTop: "20px" }}
      >
        <h1 style={{ textAlign: "center", color: "black" }}>FAQ</h1>
        <p style={{ textAlign: "center", color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
        <p style={{ textAlign: "center", color: "black" }}>
          sed do eiusmod tempor incididunt ut labore.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "100px",
            marginBottom: "120px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <section class="faq">
            <div class="faq-container">
              <details class="faq-box" open>
                <summary class="faq-header">
                  Sed accumsan nulla ut dui hendrerit?
                </summary>
                <div class="faq-content">
                  <p>
                    Nullam quis justo in lectus consequat facilisis ac et nibh.
                    Fusce faucibus augue id nibh vestibulum nec.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Suspendisse volutpat nunc vestibulum?
                </summary>
                <div class="faq-content">
                  <p>
                    Sed accumsan nulla ut dui hendrerit, et cursus risus
                    placerat. Praesent accumsan lectus vitae suscipit
                    condimentum.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Mauris ultrices aliquam lacinia?
                </summary>
                <div class="faq-content">
                  <p>
                    Integer tristique augue diam, eget ultrices nisi vehicula a.
                    Curabitur vulputate arcu nec orci laoreet iaculis.
                  </p>
                </div>
              </details>
            </div>
          </section>

          <div>
            <Image src={product2} alt="" />
          </div>
        </div>
      </div>
      {/* Faq part end */}
    </div>
  );
};

export default ProductShop2;
