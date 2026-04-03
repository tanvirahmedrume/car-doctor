import React from "react";
import banner1 from "../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../public/assets/images/banner/4.jpg";

// ✅ Slide Component (Outside)
const Slide = ({ id, img, prev, next }) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img
        src={img}
        className="w-full h-[400px] lg:h-[650px] object-cover rounded-md"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent rounded-md"></div>

      {/* Content */}
      <div className="absolute px-5 lg:px-20 w-full lg:w-1/2 h-full flex flex-col justify-center gap-5 ">
        <h2 className="text-2xl lg:text-6xl font-bold text-white">
          Affordable Price For Car Servicing
        </h2>
        <p className="text-sm text-white">
          There are many variations of passages available, but the majority have suffered alteration
        </p>

        <div className="flex gap-5">
          <button className="btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-transparent hover:border-white">
            Discover More
          </button>
          <button className="btn bg-transparent text-white border-white hover:bg-[#FF3811] hover:border-[#FF3811]">
            Latest Project
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-5 right-5 flex gap-4">
        <a href={`#${prev}`} className="btn btn-circle bg-white/20 border-white/20 text-white hover:bg-[#FF3811]">
          ❮
        </a>
        <a href={`#${next}`} className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-white/20">
          ❯
        </a>
      </div>
    </div>
  );
};

// ✅ Hero Component
const Hero = () => {
  return (
    <div className="carousel w-full">
      <Slide id="slide1" img={banner1} prev="slide4" next="slide2" />
      <Slide id="slide2" img={banner2} prev="slide1" next="slide3" />
      <Slide id="slide3" img={banner3} prev="slide2" next="slide4" />
      <Slide id="slide4" img={banner4} prev="slide3" next="slide1" />
    </div>
  );
};

export default Hero;