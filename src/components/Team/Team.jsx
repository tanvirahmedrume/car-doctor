import React from "react";
import person1 from "../../../public/assets/images/team/1.jpg";
import person2 from "../../../public/assets/images/team/2.jpg";
import person3 from "../../../public/assets/images/team/3.jpg";

import { FaFacebook, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center text-center lg:w-150 mx-auto lg:mt-20 ">
        <h4 className="text-[#FF3811] font-semibold uppercase">Team</h4>
        <h1 className="text-2xl lg:text-5xl font-bold mt-2">Meet Our Team</h1>
        <p className="text-[#737373] mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Team Items */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 mt-10">
        <div className="border border-gray-200 place-items-center justify-between p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform delay-75 duration-150">
          <img
            src={person1}
            alt="person1"
            className="w-78.5 h-73 object-cover rounded-md "
          />
          <h3 className="text-[#444] text-xl font-semibold">Car Engine Plug</h3>
          <h5 className="text-[#737373]">Engine Expert</h5>
          {/* Social icons */}
          <div className="flex text-2xl gap-x-5 my-3 ">
            <FaFacebook
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
            <FaLinkedin
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
            <FaSquareTwitter
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
          </div>
        </div>

                <div className="border border-gray-200 place-items-center justify-between p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform delay-75 duration-150">
          <img
            src={person2}
            alt="person1"
            className="w-78.5 h-73 object-cover rounded-md "
          />
          <h3 className="text-[#444] text-xl font-semibold">Car Engine Plug</h3>
          <h5 className="text-[#737373]">Engine Expert</h5>
          {/* Social icons */}
          <div className="flex text-2xl gap-x-5 my-3 ">
            <FaFacebook
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
            <FaLinkedin
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
            <FaSquareTwitter
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
          </div>
        </div>

                <div className="border border-gray-200 place-items-center justify-between p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform delay-75 duration-150">
          <img
            src={person3}
            alt="person1"
            className="w-78.5 h-73 object-cover rounded-md "
          />
          <h3 className="text-[#444] text-xl font-semibold">Car Engine Plug</h3>
          <h5 className="text-[#737373]">Engine Expert</h5>
          {/* Social icons */}
          <div className="flex text-2xl gap-x-5 my-3 ">
            <FaFacebook
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
            <FaLinkedin
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
            <FaSquareTwitter
              className="cursor-pointer bg-blue-200 p-2 w-10 h-10 rounded-2xl text-blue-500 
               hover:text-blue-700 hover:-translate-y-1 transition-transform duration-300 delay-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
