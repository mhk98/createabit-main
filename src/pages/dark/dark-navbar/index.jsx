import Link from "next/link";
import { useEffect } from "react";

function DarkNavbar({ lightMode, alwaysDark, darkOnScroll }) {
  useEffect(() => {
    if (darkOnScroll) {
      let nav = document.querySelector("#navi");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          nav.className = "topnav dark change nav-scroll";
          nav.querySelector("img").src = "/dark/assets/imgs/logo-dark.png";
        } else {
          nav.className = "topnav";
          nav.querySelector("img").src = "/dark/assets/imgs/logo-light.png";
        }
      });
    }
  }, [darkOnScroll]);

  function toggleMenu(event) {
    let menu = document.querySelector(".hamenu");
    let nav = document.querySelector("#navi");

    if (event.currentTarget.classList.contains("open")) {
      event.currentTarget.classList.remove("open");
      menu?.classList.remove("open");
      menu.style.left = `-100%`;
      if (lightMode && !alwaysDark) {
        nav.classList.remove("navlit");
        nav.querySelector("img").src = "/dark/assets/imgs/logo-light.png";
      }
    } else {
      event.currentTarget.classList.add("open");
      menu?.classList.add("open");
      menu.style.left = 0;
      if (lightMode && !alwaysDark) {
        nav.classList.add("navlit");
        nav.querySelector("img").src = "/dark/assets/imgs/logo-dark.png";
      }
    }
  }

  function handleMouseEnter(event) {
    document.querySelectorAll("ul.main-menu li").forEach((item) => {
      item.classList.add("hoverd");
    });
    event.currentTarget.classList.remove("hoverd");
  }

  function handleMouseLeave() {
    document
      .querySelectorAll("ul.main-menu li")
      .forEach((item) => item.classList.remove("hoverd"));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector(".sub-menu");
    if (subMenu) {
      if (subMenu.classList.contains("sub-open")) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        subMenu.classList.remove("sub-open");
        subMenu.style.maxHeight = "0";
        subMenu.previousElementSibling.children[0].classList.remove("dopen");
      } else if (!subMenu.classList.contains("sub-open")) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        subMenu.classList.add("sub-open");
        subMenu.style.maxHeight = "400px";
        subMenu.previousElementSibling.children[0].classList.add("dopen");
      }
    }
  }
  return (
    <div className="hamenu">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            {/* <div className="menu-text">
              <div className="text">
                <h2>Menu</h2>
              </div>
            </div> */}
            <div id="navi" className={`topnav ${alwaysDark && "navlit"}`}>
              <div className="container">
                <div className="logo icon-img-120">
                  <a href="#">
                    <img src="/dark/assets/imgs/logo-light.png" alt="" />
                  </a>
                </div>
                <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
                  <span className="icon">
                    <i></i>
                    <i></i>
                  </span>
                  <span className="text">
                    <span className="word">Menu</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/dark/home-main" className="link">
                      <span className="fill-text" data-text="Home">
                        Home
                      </span>
                    </Link>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/dark/page-services/" className="link">
                      <span className="fill-text" data-text="Services">
                        Services
                      </span>
                    </Link>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleSubMenu}
                >
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu">
                      <Link href="/dark/page-product/" className="link">
                        <span className="fill-text" data-text="Products">
                          Products
                        </span>
                      </Link>
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link
                          href="/dark/page-product-category1/"
                          className="sub-link"
                        >
                          Dynamic Digital Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dark/page-product-category2/"
                          className="sub-link"
                        >
                          Intelligent TECH Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dark/page-product-category3/"
                          className="sub-link"
                        >
                          INTERACTIVE WOW PRODUCTION
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/dark/page-contact/" className="link">
                      <span className="fill-text" data-text="Solution">
                        Solution
                      </span>
                    </Link>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/dark/blog-list/" className="link">
                      <span className="fill-text" data-text="Blog">
                        Blog
                      </span>
                    </Link>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/dark/page-contact/" className="link">
                      <span className="fill-text" data-text="Contact">
                        Contact
                      </span>
                    </Link>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/light/home-main/" className="link">
                      <span className="fill-text" data-text="Classic Mode">
                        Classic Mode
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end">
            <div className="cont-info full-width">
              <div className="item">
                <h5 className="mb-15">Get In Touch</h5>
                <p>541 Melville Geek, Palo Alto, CA 94301</p>
                <p className="underline main-color mt-5 mb-5">
                  <a href="#0">+1 840 841 25 69</a>
                </p>
                <p>
                  <a href="#0">GeekFolio_website@gmail.com</a>
                </p>
              </div>
              <div className="search-form">
                <div className="form-group">
                  <input type="text" name="search" placeholder="Search" />
                  <button>
                    <span className="pe-7s-search"></span>
                  </button>
                </div>
              </div>
              <ul className="rest social-text d-flex mt-50 fz-13">
                <li className="mr-20">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-20">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Twitter</span>
                  </a>
                </li>
                <li className="mr-20">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DarkNavbar;
