import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/base.css";
import "../styles/main.css";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AppProps } from "next/app";

function MainApp({ Component, pageProps, router }: AppProps) {
  return (
    <div id="wrapper" className="margLTop margLBottom">
      <Head>
        <title>Elaheh Dastan</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌰</text></svg>"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-3 left-content">
            <header id="header">
              <div className="main-header">
                <figure className="img-profile">
                  <Image
                    src="/me-1.jpg"
                    width={1024}
                    height={1024}
                    alt="Elaheh Dastan"
                  />
                  <figcaption className="name-profile">
                    <span>ELAHEH DASTAN</span>
                  </figcaption>
                </figure>
                <nav id="main-nav" className="main-nav clearfix tabbed">
                  <ul>
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={
                          "nav-link " +
                          (router.pathname === "/" ? "active" : "")
                        }
                      >
                        <i className="fas fa-user"></i>About Me
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/education"
                        className={
                          "nav-link " +
                          (router.pathname === "/education" ? "active" : "")
                        }
                      >
                        <i className="fas fa-graduation-cap"></i>Education
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/experience"
                        className={
                          "nav-link " +
                          (router.pathname === "/experience" ? "active" : "")
                        }
                      >
                        <i className="fas fa-briefcase"></i>Work
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={
                          "nav-link " +
                          (router.pathname === "/contact" ? "active" : "")
                        }
                      >
                        <i className="fas fa-pen"></i>Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                <ul className="social">
                  <li className="anim">
                    <a
                      href="https://github.com/elaheh-dastan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="anim">
                    <a
                      href="https://instagram.com/elaheh.dstn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <p></p>
              </div>
            </header>
          </div>
          <div className="col-md-9 right-content">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainApp;
