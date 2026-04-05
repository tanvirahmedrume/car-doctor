import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <Link to={`/service/${_id}`}>
        <h3 className="text-xl font-semibold my-3 hover:text-[#FF3811] transition-colors">
          {title}
        </h3>
      </Link>
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold text-[#FF3811] text-lg">${price}</p>
        <Link to={`/checkout/${_id}`}>
          <button className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] hover:border-[#FF3811] transition-all duration-300">
            ➤
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;