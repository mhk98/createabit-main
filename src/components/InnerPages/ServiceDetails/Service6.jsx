import Image from "next/image";
import React from "react";
import Service1 from "../../../../images/Video-Aanimation-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingUser,
  faMobile,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import service1 from "../../../../images/animation-video.png";
import Faq from "../Faq";
function Service6() {
  return (
    <div
      className="
    container"
    >
      <div
        className="serviceDetails"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Image src={Service1} alt="" style={{ width: "500px" }} />
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
        <h2 className="text-center mt-100">
          What Should You Know About Our Video Production and Animation Service
        </h2>
        <p className="fs-4 mt-80 mb-100">
          We understand your website is central to your brand identity,
          reputation and how customers perceive you. We pay special attention to
          understand your business and create a strategy to fulfill your
          business objectives. Following are some of our specialties:
        </p>
        <div className="row mt-80">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-1" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h3>OUR SOLUTIONS EFFECTIVELY AND EFFICIENTLY.</h3>
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
                <h3>WE CARRY OUT WORK WITHOUT BIAS DEADLINE.</h3>
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
                <h3>YOUR PROJECT WILL WORK EXPERIENCED SPECIALISTS.</h3>
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
                <h3>
                  WE CREATE MEMORABLE SOLUTIONS, USING THE LATEST ECHNOLOGIES.
                </h3>
                <p className="fs-4">
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h4 className="text-center mt-100 mb-100">
            Our Web Application Development Process
          </h4>
          <Faq />
        </div>
      </div>

      <div className="mt-100 mb-100">
        <h3 className="text-center">We’ll handle it</h3>
        <p className="fs-4 text-center mb-20">
          Here at Modicum, our motion design process is collaborative. We keep
          you informed every step of the way, working together to bring your
          story to life.
        </p>
        <div className="row mt-100">
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
          <div className="col-lg-4">
            <Image src={service1} alt="" />
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

export default Service6;
