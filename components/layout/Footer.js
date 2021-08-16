/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"

const menuItems = [
  "About Irving Oil",
  "Leadership",
  "History",
  "Operations",
  "Locations",
  "Careers",
  "Community",
  "Environment",
  "Health and Safety",
  "Media",
  "Emergencies",
  "Contact Us",
]

const logoUrl = "./images/1200px-Irving_Oil.svg.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-md-12 d-flex flex-column">
            <div className="footer-img-box">
              <img src="../../images/footer-banner.png" alt="" />
            </div>
            <div className="d-flex flex-row flex-column-on-phone">
              <div className="col-lg-6 offset-lg-1 footer-menu-items">
                <ul className="menu-list d-flex flex-column flex-wrap">
                  {menuItems.length > 0 &&
                    menuItems.map((item, index) => (
                      <li key={index}>
                        <Link href="/">
                          <a>{item}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-lg-6 offset-lg-1 margin-auto-on-phone">
                <div className="social-icons d-flex">
                  <h2>
                    <i className="bi-facebook"></i>
                  </h2>
                  <h2>
                    <i className="bi-instagram"></i>
                  </h2>
                  <h2>
                    <i className="bi-twitter"></i>
                  </h2>
                  <h2>
                    <i className="bi-linkedin"></i>
                  </h2>
                </div>
                <div className="img-container">
                  <img src="../../images/topoil_logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="custom-hr" />
        <div className="row mb-2">
          <div className="col-lg-9 offset-lg-1 margin-auto-on-phone">
            <div className="d-flex justify-content-between align-items-center flex-column-on-phone">
              <div className="footer-logo d-flex align-items-center">
                <a href="/" className="navbar-brand font-weight-bold">
                  <img
                    src={logoUrl}
                    alt=""
                    width="auto"
                    height="35"
                    className="d-inline-block align-text-top"
                  />
                </a>
                <span>&#169; 2021 Irving Oil</span>
              </div>
              <nav className="navbar navbar-expand-lg footer-nav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    {" "}
                    <a className="nav-link" href="#">
                      Legal
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Sitemap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer-logo {
          a {
            padding: 0px;
          }
          span {
            font-size: 14px;
          }
        }
        .footer-img-box {
          overflow: hidden;
          height: 275px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .img-container {
          overflow: hidden;
          width: 150px;
          padding-top: 20px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .menu-list {
          max-height: 165px;
          list-style: none;
          a {
            font-size: 14px !important;
          }
        }
        .social-icons {
          h2 {
            padding: 10px;
            color: #333333;
          }
        }
        .footer-nav {
          .nav-link {
            color: #414042 !important;
            font-size: 14px !important;
          }
        }
        .custom-hr {
          margin-bottom: 0;
        }
        .push-left {
          margin-left: 10.5%;
        }
      `}</style>
    </div>
  )
}

export default Footer
