import Advertisments from "../components/advertisments/Advertisments"
import Promotions from "../components/promotions/Promotions"
import Services from "../components/services/Services"
import Slider from "../components/slider/Slider"

export default function Home() {
  return (
    <>
      <section id="banner-slider">
        <Slider />
      </section>
      <section id="services">
        <h3 className="text-center mt-1 mb-4 pb-2 pt-2">
          What can we help you with today?
        </h3>
        <Services />
      </section>
      <section id="promotions">
        <Promotions />
      </section>
      <section id="advertisments" className="mt-3 pt-5">
        <Advertisments />
      </section>
      <style jsx>{`
        #services {
          padding: 30px;
          background: rgb(243, 243, 243);
          background: -webkit-linear-gradient(
            180deg,
            rgba(243, 243, 243, 1) 0%,
            rgba(255, 255, 255, 1) 30%
          );
          background: -moz-linear-gradient(
            180deg,
            rgba(243, 243, 243, 1) 0%,
            rgba(255, 255, 255, 1) 30%
          );
          background: linear-gradient(
            180deg,
            rgba(243, 243, 243, 1) 0%,
            rgba(255, 255, 255, 1) 30%
          );
          h3 {
            font-size: 36px;
            font-weight: 300;
          }
        }
      `}</style>
    </>
  )
}
