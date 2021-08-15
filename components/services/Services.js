/* eslint-disable @next/next/no-img-element */
import servicesData from "./data/services.json"

const Services = () => {
  return (
    <div>
      <div className="row">
        <div className="d-flex flex-wrap">
          {servicesData.data.map((data, index) => (
            <div className="col-md-4" key={index}>
              <div className="blocks">
                <div className="img-container">
                  <img src={data.imgUrl} alt="image" />
                </div>
                <div className="text-content-box">
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                  <ul>
                    {data.links.map((link, index) => (
                      <li key={index}>
                        <a href="#">
                          <i className="bi bi-arrow-right" />
                          &nbsp; {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blocks {
          padding: 12px;
          ul {
            list-style: none;
          }
        }
        .img-container {
          overflow: hidden;
          height: 275px;
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
          h4 {
            padding-top: 35px;
            padding-left: 25px;
            padding-right: 25px;
          }
          p {
            padding: 15px 25px;
          }
        }
      `}</style>
    </div>
  )
}

export default Services
