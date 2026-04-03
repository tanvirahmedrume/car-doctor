import React from "react";
import person from "../../../public/assets/images/about_us/person.jpg";
import parts from "../../../public/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-x-10 my-30 mx-5">
      {/* Images */}
      <div className="flex relative">
        <div className="">
          <img
            src={person}
            alt=""
            className="w-fit h lg:w-115 h-118.25 object-cover rounded-sm"
          />
        </div>
        <div className="absolute -bottom-10 right-0 ">
          <img
            src={parts}
            alt=""
            className="w-81.75 h-[33 2px] object-cover border-5 border-white rounded-sm"
          />
        </div>
      </div>
      {/* contemt */}
      <div className="mt-20 lg:mt-0 flex flex-col h-118.25 justify-between ">
        <strong className="uppercase text-[#FF3811] font-semibold flex-end text-center lg:text-start">
          ABOUT Us
        </strong>
        <h1 className="text-2xl lg:text-5xl font-bold text-center lg:text-start">
          We are qualified & of experience in this field
        </h1>
        <p className="text-[#737373] capitalize text-[16px] text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.{" "}
        </p>
        <p className="text-[#737373] capitalize text-[16px] text-justify">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.{" "}
        </p>
        <button className="btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-[#e94828] lg:w-52 hover:border-white">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
