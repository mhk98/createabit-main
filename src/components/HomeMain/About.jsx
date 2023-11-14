import Image from "next/image";
import Link from "next/link";
import about from "../../../images/about/01.jpg";
import about1 from "../../../images/about/1.jpg";
function About({ lightMode }) {
  return (
    <>
      <section className="about-intro section-padding about-dark about-light">
        <div className="container">
          <h6 className="text-center dot-titl-non fadeIn">Who We Are</h6>
          <div className="mb-40 align-middle row">
            <div className="col-lg-5">
              <div
                className=" sec-lg-head md-mb30"
                style={{ marginTop: "15px" }}
              >
                <h2 className=" d-rotate wow">
                  <span className="">
                    Your success is our mission in the digital world.
                  </span>
                </h2>
              </div>
            </div>
            <div
              className="col-lg-5 offset-lg-2 valign"
              style={{ marginTop: "15px" }}
            >
              <div className="text">
                <p className="d-slideup wow">
                  <span className="">
                    <span className="up-text">
                      CreateAbit designs is a renowned name in the digital
                      world. We are a reputed marketing and branding agency
                      based in Washington DC metro area.
                    </span>
                  </span>
                  <span className="sideup-text">
                    <span className="">
                      Our extensive history, rich experience, and excellent
                      track record make us a more reliable choice when it comes
                      to designing and marketing services.
                    </span>
                  </span>
                  {/* <span className="sideup-text">
                  <span className="up-text">
                    When it comes to designing and marketing services.
                  </span>
                </span> */}
                </p>
                <div
                  className="vew-all mt-50 ml-30 wow fadeIn"
                  data-wow-delay=".8s"
                >
                  <Link href="/dark/page-abouts">
                    Let's Go
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 rest">
              <div className="imgs md-mb50">
                <div className="img1">
                  <div className="o-hidden">
                    <div className=" wow">
                      <Image src={about} alt="" />
                    </div>
                  </div>
                </div>
                <div className="img2">
                  <div className="o-hidden">
                    <div className=" wow">
                      <Image src={about1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 valign rest">
              <div className="cont">
                <h2 className="d-rotate wow">
                  <span className="rotate-text" style={{ width: "600px" }}>
                    Achieve Sustainable Revenue Growth in Your Business.
                  </span>
                </h2>
                <div className="feat mt-80">
                  <div
                    className="item-flex d-flex align-items-center mb-50 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div>
                      <div className="icon-img-50">
                        <img
                          src={`/${
                            lightMode ? "light" : "dark"
                          }/assets/imgs/serv-icons/0.png`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cont ml-30">
                      <h6>Elevate Your Experience</h6>
                      <p className="fz-15">
                        Unlocking Smooth Conversations with Every Step of the
                        Way with Our Unrivaled High Standard Service.
                      </p>
                    </div>
                  </div>
                  <div
                    className="item-flex d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div>
                      <div className="icon-img-50">
                        <img
                          src={`/${
                            lightMode ? "light" : "dark"
                          }/assets/imgs/serv-icons/1.png`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cont ml-30">
                      <h6>Stay connected</h6>
                      <p className="fz-15">
                        With ease using our user-friendly communication
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="mt-20 ml-70 ">
                    <Link
                      href="/dark/industry"
                      className="classic butn butn-md butn-bord radius-30"
                    >
                      <span className="word">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
