/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import OnOutsiceClick from "react-outclick"

const logoUrl = "./images/1200px-Irving_Oil.svg.png"
const flag = "./images/canada-flag.jpg"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const SearchBox = (status) => {
    return (
      <input
        type="text"
        className={clicked === true ? "search-click" : "hide"}
        placeholder="Search.."
      />
    )
  }

  const handleSearch = () => {
    const toggle = (previous) => !previous
    setClicked(toggle)
  }
  const closeSearchBox = () => {
    setClicked(false)
  }
  return (
    <header>
      <div className="nav-secondary row d-flex align-items-end">
        <div className="col-lg-3 hide-on-phone">&nbsp;</div>
        <div className="col-lg-6 text-center">
          <a href="/" className="navbar-brand font-weight-bold">
            <img
              src={logoUrl}
              alt=""
              width="auto"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="col-lg-3 d-flex justify-content-around margin-top-10-on-phone">
          <span>Hi Anthony</span>
          <span>
            <img
              src={flag}
              alt=""
              width="auto"
              height="14"
              className="d-inline-block align-text-top"
            />
            &nbsp;&nbsp; Canada English
          </span>
          <OnOutsiceClick onOutsideClick={closeSearchBox}>
            <i className="bi bi-search" onClick={handleSearch} />
            <SearchBox status={clicked} />
          </OnOutsiceClick>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
        <div className="container-fluid justify-toggler-right">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav">
            {/* <span className="navbar-toggler-icon"></span> */}
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown">
                  {" "}
                  On the road{" "}
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="row d-flex">
                    <div className="col-lg-4">
                      <ul className="mega-menu-list">
                        <li>
                          <a href="#">Find a location near you</a>
                        </li>
                        <li>
                          <a href="#">Big Stop Restaurants</a>
                        </li>
                        <li>
                          <a href="#">Bark Parks</a>
                        </li>
                        <li>
                          <a href="#">Fleet {"&"} Professional Drivers</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-8 bg-white">
                      <div className="megamenu-side-box">
                        <div className="d-flex">
                          <div className="side-box-content flex-column">
                            <h3>Summer time is picnic time!</h3>
                            <p>
                              Participating Big Stops have the perfect picnic
                              spots all set up - we even bring the food to you
                              when you order online or on the phone!
                            </p>
                          </div>
                          <div className="img-container hide-on-phone">
                            <img
                              src="../../images/big-stop-picnic-DSC_3300.jpg"
                              alt=""
                              width="100%"
                              height="200px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item active">
                {" "}
                <a className="nav-link" href="#">
                  Home heat {"&"} energy
                </a>{" "}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Loyalty{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Commercial{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  Discovering Irving{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .nav-secondary {
          padding-top: 10px;
          padding-bottom: 10px;
          span {
            font-size: 14px;
            color: #787878;
          }
          .bi-search {
            color: #d22d35;
            font-size: 20px;
          }
        }
        .megamenu {
          padding: 0px;
          background-color: #d22d35;
          border-radius: 0px;
          position: relative;
          overflow: hidden;
          border: 0;
          height: 400px !important;
          h3 {
            font-size: 36px;
          }
        }
        .mega-menu-list {
          list-style: none;
          padding: 30px 20px;
          li {
            padding: 10px;
          }
          li a {
            color: #ffffff !important;
            font-size: 22px;
          }
        }
        .bg-white {
          background-color: #f2f7fb !important;
        }
        .megamenu-side-box {
          display: block;
          padding: 15px;
          .side-box-content {
            padding: 15px;
            width: 40%;
            height: 370px;
            h3 {
              font-weight: 300;
            }
          }
        }
        .img-container {
          overflow: hidden;
          width: 60%;
          margin: 20px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .bi-search:hover {
          cursor: pointer;
        }
      `}</style>
    </header>
  )
}

export default Navbar
