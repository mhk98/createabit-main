import { useEffect } from "react";
//= Scripts
import isInView from "@/common/isInView";
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import { useGetServicesQuery } from "@/features/service/serviceApi";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../../images/service/website-design-and-development-01.png";
import banner2 from "../../../../images/digital-signage.png";
import banner3 from "../../../../images/service/Feature-of-app-development-01 (1).png";
import banner4 from "../../../../images/service/Digital-Marketing-_-Seo-01.png";
import banner5 from "../../../../images/service/Graphic.png";
import banner6 from "../../../../images/service/Video-Aanimation-01.png";

function Portfolio({ lightMode }) {
  const { data, isLoading, isSuccess, isError, error } = useGetServicesQuery();

  const services = data?.data;

  console.log("services", services);
  useEffect(() => {
    loadBackgroudImages();
    window.addEventListener("scroll", handleShowTabs);
    return () => window.removeEventListener("scroll", handleShowTabs);
  }, []);

  function handleShowTabs() {
    isInView({
      selector: ".portfolio-fixed .sub-bg .cont",
      isElements: true,
      callback(element) {
        element.classList.add("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          .classList.add("current");
      },
      whenOutOfView(element) {
        element.classList.remove("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          .classList.remove("current");
      },
    });

    const leftSide = document.getElementById("sticky_item");
    if (!leftSide) return;
    const width = leftSide.getBoundingClientRect().width;
    const portfolio = document
      .querySelector(".portfolio-fixed")
      .getBoundingClientRect();

    if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
      leftSide.style.position = "fixed";
      leftSide.style.top = "0px";
      leftSide.style.width = width + "px";
      leftSide.classList.remove("is_stuck");
    } else if (portfolio.height / 2 > portfolio.bottom + 400) {
      leftSide.style.position = "absolute";
      leftSide.style.top = "auto";
      leftSide.style.bottom = "0";
      leftSide.style.width = width + "px";
      leftSide.classList.add("is_stuck");
    } else {
      leftSide.style.position = "relative";
      leftSide.style.top = "unset";
      leftSide.style.bottom = "unset";
      leftSide.style.width = "auto";
    }
  }

  return (
    <div>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner1} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                {item.number} {item.type}
              </span> */}
                <h2 className="mb-15">WEBSITE DEVELOPMENT</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Our web application development department is equipped
                      with the state-of-the-art equipment and a highly-trained
                      team of development that generates outstanding ideas for
                      our client’s project. They work closely with you to
                      generate optimal outcomes for your application/ software
                      concerns. We complete your project within the given
                      deadline.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your business visible online.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your eCommerce business stand out.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Grow with your audience.
                        </h6>
                      </li>
                    </ul>

                    <Link
                      href="/dark/page-service1"
                      className="butn butn-md butn-bord radius-30 mt-4"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner2} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                {item.number} {item.type}
              </span> */}
                <h2 className="mb-15">WEB APPLICATION</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Our web application development department is equipped
                      with the state-of-the-art equipment and a highly-trained
                      team of development that generates outstanding ideas for
                      our client’s project. They work closely with you to
                      generate optimal outcomes for your application/ software
                      concerns. We complete your project within the given
                      deadline.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your business visible online.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your eCommerce business stand out.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Grow with your audience.
                        </h6>
                      </li>
                    </ul>
                    <Link
                      href="/dark/page-service2"
                      className="butn butn-md butn-bord radius-30 mt-4"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner3} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner3} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                {item.number} {item.type}
              </span> */}
                <h2 className="mb-15">MOBILE APPS DEVELOPMENT</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      We specialize in design and development for mobile apps
                      and websites. We design websites and mobile apps that are
                      further facilitated with a high-performance rate. Our team
                      of developers and designers at Createabit Design are
                      acquainted with the creation and development of iOS and
                      Android apps that are user-specific and
                      mobile-friendly-specific.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Laser Engraving for Efficient Creativity.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Laser Engraving Efficiency.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          The Artistry of Laser Engraving.
                        </h6>
                      </li>
                    </ul>
                    <Link
                      href="/dark/page-service3"
                      className="butn butn-md butn-bord radius-30 mt-4"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner3} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                {item.number} {item.type}
              </span> */}
                <h2 className="mb-15">DIGITAL MARKETING & SEO</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Createabit Design focuses on utilizes the approach that
                      focuses on users to generate solutions for digital
                      marketing and SEO areas. We use business-oriented design
                      solutions to cater to the digital marketing and SEO
                      concerns of our clients.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          From Entry to Exit, Your Car's Security Is Our
                          Priority.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          We've Got Your Car and Entry Covered.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Secure Entries, Worry-Free Parking, Every Time.
                        </h6>
                      </li>
                    </ul>
                    <Link
                      href="/dark/page-service4"
                      className="butn butn-md butn-bord radius-30 mt-4"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner5} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner3} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                {item.number} {item.type}
              </span> */}
                <h2 className="mb-15">GRAPHICS DESIGN & PRINTING</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Our team at Createabit Design is responsible for creating
                      compelling graphic designs and prints to add an appeal to
                      your business to maintain its sustainability. We invest
                      our complete creativity, resources, and efforts to come up
                      with 100% satisfactory.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your business visible online.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your eCommerce business stand out.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Grow with your audience.
                        </h6>
                      </li>
                    </ul>
                    <Link
                      href="/dark/page-service6"
                      className="butn butn-md butn-bord radius-30 mt-4"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner6} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner3} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                {item.number} {item.type}
              </span> */}
                <h2 className="mb-15">VIDEO & ANIMATION</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      At Createabit Design, our team of designers and animators
                      are responsible for the conversion of abstract ideas to
                      animations and motion graphics. Our creative and
                      innovative animated videos are highly regarded for their
                      quality and sound.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Elevate Your Brand with Unique Gifts and Custom
                          Products.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Explore Gifting and Customization with Our Range of
                          Products.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Elevate Your Brand with Unique Gifts and Custom
                          Products.
                        </h6>
                      </li>
                    </ul>
                    <Link
                      href="/dark/page-service5"
                      className="butn butn-md butn-bord radius-30 mt-4"
                    >
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
