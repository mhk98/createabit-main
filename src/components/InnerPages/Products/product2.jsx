import { useEffect } from "react";
//= Scripts
import isInView from "@/common/isInView";
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import { useGetProductCategory3Query } from "@/features/product/productCategory3";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../../images/Digital-Marketing-_-Seo-01.png";
import banner3 from "../../../../images/Feature-of-app-development-01.png";
import banner2 from "../../../../images/digital-signage.png";

function Product2({ lightMode }) {
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductCategory3Query();

  const products = data?.data;

  console.log("products", products);
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
                <h2 className="mb-15">INTELLIGENT NAIL PRINTER</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
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
                      href="/dark/page-wow1"
                      className="butn-circle d-flex align-items-center text-center mt-50"
                    >
                      <div className="full-width">
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
                        <span className="full-width">View Details</span>
                      </div>
                      <img
                        src={`/${
                          lightMode ? "light" : "dark"
                        }/assets/imgs/svg-assets/circle-star.svg`}
                        alt=""
                        className="circle-star"
                      />
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
                <h2 className="mb-15">CLEANING WINDOWS ROBOTS</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
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
                      href="/dark/page-wow2/"
                      className="butn-circle d-flex align-items-center text-center mt-50"
                    >
                      <div className="full-width">
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
                        <span className="full-width">View Details</span>
                      </div>
                      <img
                        src={`/${
                          lightMode ? "light" : "dark"
                        }/assets/imgs/svg-assets/circle-star.svg`}
                        alt=""
                        className="circle-star"
                      />
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
                <h2 className="mb-15">LASER ENGRAVING MACHINE</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
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
                      href="/dark/page-wow3"
                      className="butn-circle d-flex align-items-center text-center mt-50"
                    >
                      <div className="full-width">
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
                        <span className="full-width">
                          {/* <Link href="">View Details</Link> */}
                          View Details
                        </span>
                      </div>
                      <img
                        src={`/${
                          lightMode ? "light" : "dark"
                        }/assets/imgs/svg-assets/circle-star.svg`}
                        alt=""
                        className="circle-star"
                      />
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
                <h2 className="mb-15">CAR PARKING & SECURITY ENTRIES</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
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
                      href="/dark/page-wow4"
                      className="butn-circle d-flex align-items-center text-center mt-50"
                    >
                      <div className="full-width">
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
                        <span className="full-width">
                          {/* <Link href="">View Details</Link> */}
                          View Details
                        </span>
                      </div>
                      <img
                        src={`/${
                          lightMode ? "light" : "dark"
                        }/assets/imgs/svg-assets/circle-star.svg`}
                        alt=""
                        className="circle-star"
                      />
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

export default Product2;
