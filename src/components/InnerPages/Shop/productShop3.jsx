import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import instrument from "../../../../images/each-part-graphic.jpg";
import laptop from "../../../../images/laptop.png";
import tab from "../../../../images/tab.jpg";
import testimonial from "../../../../images/testimonial.png";
import icon from "../../../../images/websiteboxes-new-Bluegrey-retail.png";
const ProductShop3 = () => {
  return (
    <div className="container">
      <div
        style={{
          textAlign: "left",
          alignItems: "center",
          display: "block",
          alignContent: "center",
          // padding: "0 200px",
          marginTop: "100px",
          marginBottom: "80px",
        }}
      >
        <h2>Finally, a POS System That Fits Your Business</h2>
        <p>
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
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div>
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
        </div>
        <h6 style={{ textAlign: "center", marginTop: "20px" }}>
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
        <h2 style={{ textAlign: "center", marginBottom: "100px" }}>
          Everything You Need to Run a Successful Business
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "70px",
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
                <h5>Customize Your System</h5>
                <p>
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
                <h5>Customize Your System</h5>
                <p>
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
                <h5>Customize Your System</h5>
                <p>
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
          paddingTop: "100px",
          paddingBottom: "150px",
          marginBottom: "50px",
          backgroundColor: "#2468A3",
          paddingLeft: "15px",
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
            Terry Ickowicz -{" "}
            <a style={{ paddingTop: "40px" }}>
              Doughboy’s Bakery and Café - Los Angeles, CA
            </a>
          </p>
        </div>
        <div>
          <Image style={{ width: "250px" }} src={testimonial} alt="" />
        </div>
      </div>

      <div
        style={{
          textAlign: "left",
          // width: "900px",
          margin: "auto",
        }}
      >
        <h2>Each Part of the System Plays a Role</h2>
        <h6 style={{ marginBottom: "40px" }}>
          We Combine Hardware, Software, and Services to Provide Turnkey POS
          Solutions
        </h6>
        <Image style={{ marginBottom: "40px" }} src={instrument} alt="" />
        <p
          style={{
            marginBottom: "120px",
            paddingBottom: "80px",
          }}
        >
          Navigating the POS purchasing decision can be daunting, and we’re here
          to help. We offer a variety of point of sale hardware and POS software
          options to meet the unique needs of retail stores and restaurants
          around the world. Our POS systems are supported by our dedicated
          customer service – including 24/7 US-based support, payment
          processing, and even ongoing employee training – to offer our
          customers a complete point of sale solution. We've helped over 5,000
          businesses streamline their operations and increase their efficiency.
          Our Product Specialists act as true consultants to help you customize
          a system to meet your business goals. Recognized by Top Ten Reviews as
          one of the best POS system providers, we have the experience and
          expertise to help you make the right point of sale decision for your
          business. Learn why we're the best POS system provider for you here
        </p>
      </div>
    </div>
  );
};

export default ProductShop3;
