import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { hairServices } from "../../utils/hairServices";
import { laserServices } from "../../utils/laserServices";
import { skinServices } from "../../utils/skinServices";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" width={"100px"} />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent" onClick={toggleNavbar}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"
                        }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about/"
                      className={`nav-link ${currentPath == "/about/" && "active"
                        }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/hair"
                      // onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Hair
                    </Link>


                    <ul className="dropdown-menu">
                      {hairServices.slice(0, 3).map((item) => {
                        return (
                          <li className="nav-item">
                            <Link
                              href={item.link}
                              className={`nav-link ${currentPath == "/hair" && "active"
                                }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        )
                      })}
                      <li className="nav-item">
                        <Link
                          href="/hair"
                          className={`nav-link ${currentPath == "/hair" && "active"
                            }`}
                        >
                          <i class="icofont-rounded-double-right"></i>
                          View All
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/laser"
                      className="nav-link dropdown-toggle"
                    >
                      Laser
                    </Link>


                    <ul className="dropdown-menu">
                      {laserServices.slice(0, 3).map((item) => {
                        return (
                          <li className="nav-item">
                            <Link
                              href={item.link}
                              className={`nav-link ${currentPath == "/laser" && "active"
                                }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        )
                      })}
                      <li className="nav-item">
                        <Link
                          href="/laser/"
                          className={`nav-link ${currentPath == "/laser" && "active"
                            }`}
                        >
                          <i class="icofont-rounded-double-right"></i>
                          View All
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/skin"
                      className="nav-link dropdown-toggle"
                    >
                      Skin
                    </Link>


                    <ul className="dropdown-menu">
                      {skinServices.slice(0, 3).map((item) => {
                        return (
                          <li className="nav-item">
                            <Link
                              href={item.link}
                              className={`nav-link ${currentPath == "/skin" && "active"
                                }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        )
                      })}
                      <li className="nav-item">
                        <Link
                          href="/skin/"
                          className={`nav-link ${currentPath == "/skin" && "active"
                            }`}
                        >
                          <i class="icofont-rounded-double-right"></i>
                          View All
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/gallery"
                      className={`nav-link ${currentPath == "/gallery/" && "active"
                        }`}
                    >
                      Gallery
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${currentPath == "/blog/" && "active"
                        }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-srh">
                <div className="common-btn">
                  <Link
                    style={{
                      border: "2px solid #0046c0",
                      color: "#ffffff",
                      backgroundColor: "#0046c0",
                      position: "relative"
                    }}
                    href="/appointment"
                  >
                    Get Appointment
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
