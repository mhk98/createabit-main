import Link from "next/link";
import { useEffect } from "react";

function DarkNavbar({ lightMode, mainBg, subBg, noStatic, curve }) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-side").classList.add("show");
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-side")
      .classList.remove("show");
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains("open")) closeBtn.style.display = "block";
    else closeBtn.style.display = "none";
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${
        noStatic ? "" : "static"
      } ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`}
    >
      <div className="container">
        <Link className="logo icon-img-100" href="/dark/home-creative-agency">
          <img src="/light/assets/imgs/logo-light.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                // href={`/${lightMode ? "light" : "dark"}/home-creative-agency`}
                href="/dark/home-creative-agency"
              >
                <span className="rolling-text">Home</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                // href={`/${lightMode ? "light" : "dark"}/page-services`}
                href="/dark/page-services"
              >
                <span className="rolling-text">Services</span>
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseMove={handleDropdownMouseMove}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/dark/page-product/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Products</span>
              </Link>
              <ul className="dropdown-menu">
                <li
                  className="dropdown-item"
                  onMouseMove={handleDropdownSideMouseMove}
                  onMouseLeave={handleDropdownSideMouseLeave}
                >
                  <Link href="/dark/page-product-category1">
                    Dynamic Digital Products
                    <i className="fas fa-angle-right icon-arrow"></i>
                  </Link>
                  <ul className="dropdown-side">
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        DIGITAL DISPLAY
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Lcd Wall Video
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Wall Mount Display
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Stand Alone Signage
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Touch Table
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            OutDoor Digital Synage
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Multimedia Kiosk
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        3D HOLOGRAPHIC SIGNS
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        POS SYSTEMS
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className="dropdown-item"
                  onMouseMove={handleDropdownSideMouseMove}
                  onMouseLeave={handleDropdownSideMouseLeave}
                >
                  <Link href="/dark/page-product-category2">
                    Intelligent Tech Products
                    <i className="fas fa-angle-right icon-arrow"></i>
                  </Link>
                  <ul className="dropdown-side">
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        INTELLIGENT NAIL PRINTER
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        CLEANING WINDOWS ROBOTS
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        LASER ENGRAVING MACHINE
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        CAR PARKING & SECURITY ENTRIES
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        Business Gift and custom product
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className="dropdown-item"
                  onMouseMove={handleDropdownSideMouseMove}
                  onMouseLeave={handleDropdownSideMouseLeave}
                >
                  <Link href="/dark/page-product-category3">
                    Interactive Wow Production
                    <i className="fas fa-angle-right icon-arrow"></i>
                  </Link>
                  <ul className="dropdown-side">
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        INTERACTIVE FLOOR PROJECTION
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        PROJECTION BOOK
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        INTERACTIVE BAR SYSTEM & INTERACTIVE BAR
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="dropdown-item"
                      onMouseMove={handleDropdownSideMouseMove}
                      onMouseLeave={handleDropdownSideMouseLeave}
                    >
                      <a href="#0">
                        MULTI TOUCH WALL PROJECTION
                        <i className="fas fa-angle-right icon-arrow"></i>
                      </a>
                      <ul className="dropdown-side">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-1"
                          >
                            Nested Item 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/dark/nested-item-2"
                          >
                            Nested Item 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                href={`/${lightMode ? "light" : "dark"}/page-contact`}
              >
                <span className="rolling-text">Solution</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                href={`/${lightMode ? "light" : "dark"}/page-contact`}
              >
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/light/home-creative-agency/">
                <span className="rolling-text">Classic Mode</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DarkNavbar;
