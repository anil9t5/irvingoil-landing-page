import { Slide } from "react-slideshow-image"

const slideImages = [
  {
    heading: "Order your home heating fuel online!",
    button: "Order now",
    imageUrl: "../../images/slide1.jpg",
  },
  {
    heading: "Good energy, today & tomorrow",
    button: "Read our 2020 report on sustainability",
    imageUrl: "../../images/slide2.jpg",
  },
]

import "react-slideshow-image/dist/styles.css"

const Slider = () => {
  return (
    <div>
      <Slide easing="ease">
        {slideImages.map((data, index) => (
          <div key={index} className="each-slide">
            <div
              className="slide-content d-flex flex-column align-items-start"
              style={{ backgroundImage: `url(${data.imageUrl})` }}>
              <div className="row">
                <div className="col-lg-8 offset-lg-1">
                  <h2>{data.heading}</h2>
                  <button
                    type="button"
                    className="btn btn-primary btn-call-to-action">
                    {data.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <style jsx>{`
        :global(.default-nav) {
          fill: #ffffff !important;
          height: 80px;
        }
        :global(.react-slideshow-container .default-nav:first-of-type) {
          margin-right: -45px !important;
          width: 45px !important;
        }
        :global(.react-slideshow-container .default-nav:last-of-type) {
          margin-left: -45px !important;
          width: 45px !important;
        }
        :global(.react-slideshow-container
            .default-nav:hover, .react-slideshow-container .default-nav:focus) {
          background: none !important;
        }
        :global(.react-slideshow-container .default-nav) {
          background: none !important;
        }
        .each-slide {
          .slide-content {
            padding: 20px 30px;
          }
          h2 {
            color: #ffffff;
            font-size: 60px;
            font-weight: bold;
            text-shadow: 0px 2px rgba(0, 0, 0, 0.3);
          }
        }
        .btn-call-to-action {
          font-size: 24px;
          background-color: #d22d35 !important;
          border: 0px;
          border-radius: 0px;
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

export default Slider
