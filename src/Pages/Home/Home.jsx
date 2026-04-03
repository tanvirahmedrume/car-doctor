import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import calender from "../../../public/assets/icons/calender.svg";
import phone from "../../../public/assets/icons/phone.svg";
import location from "../../../public/assets/icons/location.svg";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">

        <Hero></Hero>
        <About></About>
        <Services></Services>
        {/* CARD BLOCK */}
        <div className="grid lg:grid-cols-3 bg-black text-white  mx-5 px-10 lg:mx-0 lg:px-0 lg:place-items-center h-60 lg:h-50 rounded-xl mb-10">
          {/* CARD1 */}
          <div className="flex items-center gap-x-4">
            <img src={calender} alt="calender" className="lg:w-10 " />
            <div>
              <p className="text-sm">We are open monday-friday</p>
              <h4 className="lg:text-xl font-semibold">7:00 am - 9:00 pm</h4>
            </div>
          </div>
          {/* CARD2 */}
          <div className="flex items-center gap-x-4">
            <img src={phone} alt="calender" className="lg:w-10" />
            <div>
              <p className="text-sm">Have a question?</p>
              <h4 className="lg:text-xl font-semibold">+2546 251 2658</h4>
            </div>
          </div>
          {/* CARD3 */}
          <div className="flex items-center gap-x-4">
            <img src={location} alt="calender" className="lg:w-10 " />
            <div>
              <p className="text-sm">Need a repair? our address</p>
              <h4 className="lg:text-xl font-semibold">
                Liza Street, New York
              </h4>
            </div>
          </div>
        </div>
        {/* CARDBLOCK END */}
        <PopularProducts></PopularProducts>
        <Team></Team>
      </div>


    </div>
  );
};

export default Home;
