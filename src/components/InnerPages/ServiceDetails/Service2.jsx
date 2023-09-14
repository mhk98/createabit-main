import Intro from "@/components/MarketingAgency/Intro";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import web_banner from "../../../../images/Custom-web-app-and-developments-01.png";

function Service2() {
  return (
    <div>
      <div className="container service">
        <div className="service_feature">
          <div>
            <Image src={web_banner} alt="" style={{ width: "500px" }} />
          </div>
          <div style={{ width: "500px" }}>
            <h4>Website Design & Development</h4>
            <h5>Professional & Creative Web Design Solution</h5>
            <p className="mt-8">
              Createabit's experienced web designers have the ability to make
              your website look professional, yet beautiful. We use the latest
              web design technologies that enabled us to become the top web
              design and development company in the industry.
            </p>{" "}
            <br />
            <p>
              Our commitment is to provide prodigious, high-quality services by
              utilizing professionals with their research and studies to deliver
              exceptional value to our client getting them to their objectives
              that directly hit to the targeted area.
            </p>
            <div className="purchase" style={{ marginTop: "20px" }}>
              <a className="butn butn-md butn-bord radius-30">
                <span>SEND US YOUR QUERIES! </span>
              </a>
            </div>
          </div>
        </div>

        <div className="serviceDetails-title">
          <h4 className="text-center mt-80 mb-30">Why choose our Web Apps?</h4>
          <p>
            We understand your website is central to your brand identity,
            reputation and how customers perceive you. We pay special attention
            to understand your business and create a strategy to fulfill your
            business objectives. Following are some of our specialties:
          </p>
          <div
            className="row"
            style={{
              marginTop: "80px",
            }}
          >
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "30px" }} />
                <h5>Professional Design</h5>
              </div>
              <div>
                <p>
                  We focus on developing effective, elegant and affordable web
                  design solutions that create opportunities for small to large
                  Organizations to grow their businesses.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "30px" }} />
                <h5>Professional Design</h5>
              </div>
              <div>
                <p>
                  We focus on developing effective, elegant and affordable web
                  design solutions that create opportunities for small to large
                  Organizations to grow their businesses.
                </p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "80px",
            }}
          >
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "30px" }} />
                <h5>Professional Design</h5>
              </div>
              <div>
                <p>
                  We focus on developing effective, elegant and affordable web
                  design solutions that create opportunities for small to large
                  Organizations to grow their businesses.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "30px" }} />
                <h5>Professional Design</h5>
              </div>
              <div>
                <p>
                  We focus on developing effective, elegant and affordable web
                  design solutions that create opportunities for small to large
                  Organizations to grow their businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center mt-100 mb-100">
            Features That You’ll Love
          </h3>
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default Service2;
