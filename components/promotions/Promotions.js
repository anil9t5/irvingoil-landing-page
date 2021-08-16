/* eslint-disable @next/next/no-img-element */
import promotions from "./data/promotions.json"

const Promotions = () => {
  return (
    <div>
      <div className="row">
        {promotions.data.map((data, index) => (
          <div
            className="d-flex align-items-stretch flex-column-on-phone"
            key={index}>
            <div
              className={[
                "col-md-12 col-lg-6",
                index % 2 == 0 ? "" : "order-last",
              ].join(" ")}>
              <div className="img-container">
                <img src={data.imgUrl} alt="image" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 text-content-box">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <ul>
                {data.links.map((link, index) => (
                  <li key={index}>
                    <a href="#">
                      {/* <i className="bi bi-arrow-right" /> */}
                      &nbsp;{link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .img-container {
          display: block;
          overflow: hidden;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        a {
          color: #d22d35;
          font-size: 20px;
        }
        .text-content-box {
          display: block;
          background-color: #f2f7fb;
          padding: 60px;
          h3 {
            font-size: 32px;
          }
          ul {
            list-style: none;
            padding-left: 15px;
            li::before {
              content: "";
              display: inline-block;
              height: 14px;
              width: 20px;
              background-image: url("../../images/arrow.png");
              background-size: 20px;
              background-repeat: no-repeat;
            }
          }
          h3,
          p {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  )
}

export default Promotions
