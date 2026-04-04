import React from "react";

import banner3 from "../../../public/assets/images/banner/3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa6";
import logo from "../../../public/assets/logo.svg";
import { Banner } from "../../components/Banner/Banner";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  // 🔹 Service List
  const services = [
    "Full Car Repair",
    "Engine Repair",
    "Automatic Services",
    "Engine Oil Change",
    "Battery Charge",
  ];

  // 🔹 Download Items
  const downloads = [
    {
      title: "Our Brochure",
      subtitle: "Download",
    },
    {
      title: "Company Details",
      subtitle: "Download",
    },
  ];

  // 🔹 Feature Cards
  const features = [
    {
      title: "Instant Car Services",
      desc: "It uses a dictionary of over 200 Latin words.",
    },
    {
      title: "24/7 Quality Service",
      desc: "It uses a dictionary of over 200 Latin words.",
    },
    {
      title: "Easy Customer Service",
      desc: "It uses a dictionary of over 200 Latin words.",
    },
    {
      title: "Quality Cost Service",
      desc: "It uses a dictionary of over 200 Latin words.",
    },
  ];

  // 🔹 Steps
  const steps = [
    { step: 1, title: "STEP ONE" },
    { step: 2, title: "STEP TWO" },
    { step: 3, title: "STEP THREE" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 lg:mt-20">
      <Banner title="Service Details"></Banner>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <img src={banner3} className="rounded-xl w-full" />

          <h1 className="my-6 lg:my-10 text-2xl lg:text-4xl font-semibold">
            Unique Car Engine Service
          </h1>

          <p className="text-[#737373] text-sm mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-[#F3F3F3] px-6 py-5 rounded-xl border-t-2 border-red-400 hover:shadow-xl transition hover:-translate-y-1"
              >
                <h5 className="font-semibold mb-2">{item.title}</h5>
                <p className="text-sm text-[#737373]">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[#737373] text-sm my-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          <h1 className="my-6 lg:my-10 text-2xl lg:text-4xl font-semibold">
            3 Simple Steps to Process
          </h1>

          <p className="text-[#737373] text-sm my-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((item) => (
              <div
                key={item.step}
                className="border border-gray-200 shadow-xl rounded-2xl py-5 flex flex-col items-center gap-3 hover:shadow-xl transition"
              >
                <div className="w-20 h-20 bg-[#ff8d8d] rounded-full flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#f55959] rounded-full flex items-center justify-center">
                    <p className="text-white text-xl">{item.step}</p>
                  </div>
                </div>

                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-[#444] text-center px-3">
                  It uses a dictionary of over 200.
                </p>
              </div>
            ))}
          </div>

          <img src={banner3} className="rounded-xl mt-10 w-full mb-10" />
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3 space-y-6">
          {/* Services */}
          <div className="bg-[#F3F3F3] p-5 rounded-md space-y-3">
            <h3 className="font-semibold text-xl">Services</h3>

            {services.map((service, i) => (
              <button
                key={i}
                className="bg-white hover:bg-[#FF3811] hover:text-white w-full flex justify-between items-center px-4 py-2 rounded-md transition"
              >
                {service}
                <IoIosArrowRoundForward />
              </button>
            ))}
          </div>

          {/* Downloads */}
          <div className="bg-black p-4 rounded-md">
            <h3 className="text-white mb-4">Download</h3>

            {downloads.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-[#1f1f1f] p-3 rounded-md mb-3"
              >
                <div className="flex gap-3 items-center">
                  <FaRegFilePdf className="text-white" />
                  <div>
                    <h4 className="text-white text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.subtitle}</p>
                  </div>
                </div>

                <IoIosArrowRoundForward className="text-white text-4xl rounded-full hover:bg-transparent hover:border hover:border-red-400 hover:cursor-pointer bg-[#FF3811]" />
              </div>
            ))}
          </div>

          {/* Offer */}
          <div className="bg-black p-4 rounded-md flex flex-col text-center justify-center h-96">
            <img src={logo} className="mx-auto w-20 mb-3" />

            <p className="text-white mb-4 text-2xl font-semibold">
              Need Help? We Are Here
            </p>

            <div className="relative">
              <div className="bg-white rounded-xl pt-6 pb-14">
                <h2 className="text-xl font-semibold">
                  <span className="text-[#FF3811] ">Car Doctor</span> Special
                </h2>
                <p className="text-sm text-gray-400 font-semibold ">
                  Save up to <span className="text-[#FF3811]">60% OFF</span>
                </p>
              </div>

              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                <button className="bg-[#FF3811] text-white px-4 py-2 rounded-full text-sm">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold">Price $250</h2>

          <button className="bg-[#FF3811] text-white w-full py-3 rounded-md mb-5">
            <Link to={"/checkout"}>Process to checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
