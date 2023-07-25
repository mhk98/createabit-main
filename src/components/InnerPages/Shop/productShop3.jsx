import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import laptop from "../../../../images/laptop.png";
import tab from "../../../../images/tab.jpg";
import testimonial from "../../../../images/testimonial.png";
import icon from "../../../../images/websiteboxes-new-Bluegrey-retail.png";
const ProductShop3 = () => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div
        style={{
          textAlign: "left",
          alignItems: "center",
          display: "block",
          alignContent: "center",
          padding: "0 200px",
          marginTop: "100px",
          marginBottom: "80px",
        }}
      >
        <h3>Finally, a POS System That Fits Your Business</h3>
        <p style={{ color: "black" }}>
          Your search for the perfect POS system is over. POS Nation recognizes
          that retail store, restaurant, and specialty store owners need a point
          of sale specifically tailored to their unique businesses. That’s why
          we sell more than POS systems – we sell complete point of sale
          solutions. Give us a call and learn why over 5,000 customers have
          trusted us to provide them the best POS system for their businesses.
        </p>
      </div>

      <div style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center", color: "black" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center", color: "black" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center", color: "black" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center", color: "black" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center", color: "black" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center", color: "black" }}>Retail POS</p>
          </div>
        </div>
        <h6 style={{ textAlign: "center", marginTop: "20px", color: "black" }}>
          <a href="">
            Don't see your industry? Don't worry, we've got you covered. See
            them all here{" "}
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </span>
          </a>
        </h6>
      </div>

      <div>
        <h3 style={{ textAlign: "center" }}>
          Everything You Need to Run a Successful Business
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: " 0 50px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",

                alignItems: "center",
              }}
            >
              <Image className="tab_img" src={laptop} alt="" />
              <div style={{ width: "400px", height: "115px" }}>
                <h5 style={{ color: "#F9AF4C" }}>Customize Your System</h5>
                <p style={{ color: "black" }}>
                  Choose the POS software, hardware, and peripherals you need to
                  maximize the productivity and profitability of your business.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",

                alignItems: "center",
              }}
            >
              <Image className="tab_img" src={laptop} alt="" />
              <div style={{ width: "400px", height: "115px" }}>
                <h5 style={{ color: "#F9AF4C" }}>Customize Your System</h5>
                <p style={{ color: "black" }}>
                  Choose the POS software, hardware, and peripherals you need to
                  maximize the productivity and profitability of your business.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <Image className="tab_img" src={laptop} alt="" />
              <div style={{ width: "400px", height: "115px" }}>
                <h5 style={{ color: "#F9AF4C" }}>Customize Your System</h5>
                <p style={{ color: "black" }}>
                  Choose the POS software, hardware, and peripherals you need to
                  maximize the productivity and profitability of your business.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              style={{ width: "500px", height: "380px" }}
              src={tab}
              alt=""
            />
          </div>
        </div>

        <h6
          style={{
            textAlign: "center",
            marginTop: "20px",
            paddingBottom: "50px",
            color: "black",
          }}
        >
          <a href="">
            See how our POS software can help your business grow
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </span>
          </a>
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "200px",
          paddingTop: "60px",
          paddingBottom: "150px",
          marginBottom: "50px",
          backgroundColor: "#2468A3",
        }}
      >
        <div>
          <p>
            “When I called you guys, I said, ‘Look, I want the easiest thing to
            use, that takes up the least amount of space, that looks the best’
            and you came up with a solution. … Literally plug it in, turn on the
            juice, connect our internet, and we’re in business. … I think it’s
            awesome.”
          </p>
          <p>
            <small>Terry Ickowicz-</small>
            <span>
              <a href="https://www.posnation.com/pos-nation-reviews">
                Doughboy’s Bakery and Café - Los Angeles, CA
              </a>
            </span>
          </p>
        </div>
        <div>
          <Image src={testimonial} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductShop3;
