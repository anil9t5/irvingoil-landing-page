/* eslint-disable @next/next/no-img-element */
import React from "react"

const Advertisments = () => {
  return (
    <>
      <div className="img-container">
        <img src="../images/F150-Contest.png" alt="image-ads" />
      </div>
      <style jsx>{`
        .img-container {
          overflow: hidden;
          height: 210px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      `}</style>
    </>
  )
}

export default Advertisments
