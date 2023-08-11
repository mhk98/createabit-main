import Image from "next/image";
import React from "react";
import service1 from "../../../../images/Graphic-01.png";
import service2 from "../../../../images/Graphic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingUser, faMobile, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

function Service5() {
  return (
    <div className="container">
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
            Createabit's experienced web designers have the ability to make your
            website look professional, yet beautiful. We use the latest web
            design technologies that enabled us to become the top web design and
            development company in the industry.
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

      <div>
        <h2 className="text-center mt-100 mb-100">
          Our Graphic Design Process
        </h2>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <li className="fs-3">Assemble Requirements</li>
            <li className="fs-3">Inspect and Design</li>
            <li className="fs-3">Programming & Development</li>
            <li className="fs-3">Execution</li>
            <li className="fs-3">Testing and Verification</li>
            <li className="fs-3">Support</li>
            <li className="fs-3">Maintenance</li>
            <li className="fs-3">Evaluate the Design</li>
            <p className="fs-4 mt-20">
              Finally, we will deploy the application which will involve user
              acceptance testing in the live ‘platform’.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image src={service2} alt="" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mt-100">Why choose US ?</h2>
        <div className="row mt-80">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-1" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h3>High Quality Design</h3>
                <p className="fs-4">
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-1" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h3>High Quality Design</h3>
                <p className="fs-4">
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60 mb-100">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-1" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h3>High Quality Design</h3>
                <p className="fs-4">
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-1" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h3>High Quality Design</h3>
                <p className="fs-4">
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-100 mb-100">
        <h3>Features that you’ll love about our SMM Service</h3>
        <div className="row mt-100">
          <div className="col-lg-4">
            <Image src={service2} alt="" />
          </div>
          <div class=" col-lg-4 col-md-12 col-sm-12">
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
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
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
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
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
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
                </small>
              </div>
            </div>
          </div>
          <div class=" col-lg-4 col-md-12 col-sm-12">
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
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
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
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
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
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service5;
