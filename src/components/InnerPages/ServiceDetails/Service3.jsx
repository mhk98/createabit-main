import Testimonials from "@/components/DigitalAgency/Testimonials";
import {
  faBuildingUser,
  faCheck,
  faSquarePersonConfined,
  faUserAltSlash,
  faUserGraduate,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import service3 from "../../../../images/Apps-developer-and-expart-01.png";
import service2 from "../../../../images/Apps-developer-service-01.png";
import service1 from "../../../../images/Graphic-01.png";

function Service3() {
  return (
    <div>
      <div className="container service">
        <div
          className="serviceDetails"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Image src={service1} alt="" style={{ width: "500px" }} />
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

        <div
          className="serviceDetails-title row"
          style={{ paddingBottom: "160px" }}
        >
          <h4 className="text-left mt-80 mb-30 col-lg-12">
            Why make a mobile app?
          </h4>
          <div className="mb-40 col-lg-12">
            <p>
              - Mobile only internet population has grown by more than 750
              million people in the last 5 years (Source: fastcodesign)
            </p>
            <p>
              - In 2015, the mobile only population is estimated to be 788
              million (Source: fastcodesign)
            </p>
            <p>
              - 86% of the time spent on mobile is done on apps (Source:
              techcrunch)
            </p>
            <p>
              - Gaming and social networking account for more than 60% of time
              spent on apps. (Source: techcrunch)
            </p>
            <p>
              - Of all ad revenue made on mobile more than 30% is for apps other
              than Google or Facebook. (Source: techcrunch)
            </p>
          </div>
          <p className="col-lg-12">
            At Openxcell Technolabs, we help you turn your idea into apps, solve
            problems and make your app a potential goldmine. Openxcell boasts of
            standing in the top league when it comes to app development for iOS,
            Android and Windows. We have evolved into a one stop destination for
            mobile application creation to the final step of app marketing. With
            over half a decade of experience, we position ourselves as the
            pioneers in the industry and one of the most reliable app
            development company today. To be a worthy offshore development
            company, we hire the most intelligent, proficient and tech-savvy
            mobile apps developers. Our developers have in-depth knowledge of
            major platforms/frameworks used for mobile development. With a team
            of over 100 dedicated developers, designers, and creative engineers,
            we are equipped to meet your project requirements on creative
            benchmarks as well as on human capital. Share your app idea with us
            let us create a valuable customer touch point for your business.
          </p>
        </div>

        <Testimonials />

        <div>
          <h3 className="text-center mt-60">
            List Of Our App Development Services
          </h3>
          <div>
            <div className="row mt-100">
              <div class=" col-lg-5 col-md-12 col-sm-12 ml-90">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Mobile App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Mobile App Design</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Smartphone App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Tablet App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">HTML5 Mobile Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">iOS App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Android App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">BlackBerry App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Windows App Development</h5>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "30px", fontWeight: "600" }}
                  />
                  <h5 className="ml-10">Cross-platform Development</h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Image src={service2} alt=""></Image>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div
              className="row mt-100 "
              style={{ display: "flex", alignItems: "center", padding: "10px" }}
            >
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Image src={service3} alt=""></Image>
              </div>
              <div class=" col-lg-5 col-md-12 col-sm-12 ml-90">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faBuildingUser}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faBuildingUser}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faUserGraduate}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faSquarePersonConfined}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faUserAltSlash}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faUserSecret}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center ",
                    marginBottom: "20px",
                  }}
                >
                  <div className="left-side">
                    <div className="user-icon">
                      <FontAwesomeIcon
                        className="rounded-circle"
                        icon={faUserSecret}
                        style={{
                          fontSize: "10px",
                          backgroundColor: "white",
                          color: "black",
                          width: "40px",
                          height: "40px",
                          padding: "25px",
                        }}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="ml-20 right-side">
                    <p
                      className="heading"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Superior security and compliance
                    </p>
                    <small className="content">
                      We understand your industry and business. So, we provide
                      the solution that is customized and fits according to your
                      needs.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service3;
