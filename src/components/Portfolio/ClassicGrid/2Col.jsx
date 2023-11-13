import Link from "next/link";
import { useEffect } from "react";
import portfolio1 from "../../../../images/DYNAMIC DIGITAL PRODUCTS/3D-Holographic-Signs-1.png";
import portfolio2 from "../../../../images/DYNAMIC DIGITAL PRODUCTS/Digital-Display.png";
import portfolio3 from "../../../../images/DYNAMIC DIGITAL PRODUCTS/Mirror-advertising-player.jpg";
import portfolio4 from "../../../../images/DYNAMIC DIGITAL PRODUCTS/POS-systems.png";

//= Scripts
import initIsotope from "@/common/initIsotope";
import Image from "next/image";
//= Data

function Grid() {
  useEffect(() => {
    initIsotope();
  }, []);

  return (
    <section className="portfolio section-padding">
      <div className="container">
        <div className="mb-10 sec-lg-head">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-re">
                <h6 className="dot-titl-non">Product</h6>
                <h2 className="fz-50">Dynamic Digital Products</h2>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="justify-end full-width d-flex justify-content-end">
                <div className="vew-all">
                  <Link href="/dark/portfolio-classic-grid">
                    View All Works
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
        </div>
        <div className="row">
          <div className="text-center filtering col-12 mb-80">
            {/* <div className="filter">
              <span className="text">Filter By :</span>
              {data.filters.map((item, index) => (
                <span
                  data-filter={item.filter}
                  className={index === 0 ? "active" : ""}
                  data-count={item.count}
                  key={item.id}
                >
                  {item.title}
                </span>
              ))}
            </div> */}
          </div>
        </div>
        <div className="gallery">
          <div className="grid row max-margin">
            <div className={`col-md-6 items info-overlay mb-80`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio1} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
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
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> Dynamic Digital Products
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">
                      3D HOLOGRAPHIC SIGNS
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-md-6 items info-overlay mb-80`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio2} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
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
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> Dynamic Digital Products
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">POS SYSTEMS</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid row max-margin">
            <div className={`col-md-6 items info-overlay mb-80`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio3} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
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
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> Dynamic Digital Products
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">DIGITAL DISPLAY</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-md-6 items info-overlay mb-80`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio4} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
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
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> Dynamic Digital Products
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">DIGITAL DISPLAY</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;
