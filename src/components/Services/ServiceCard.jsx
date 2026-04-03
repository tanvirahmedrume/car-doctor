import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-xl mt-4 flex flex-col justify-between">
      <img src={img} alt={title} />
      <h3 className="text-xl font-semibold my-2">{title}</h3>
      <div className="flex justify-between items-center">
        <p className="font-bold">Price: ${price}</p>
        <a className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:bg-white/20 hover:text-black">
          ❯
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
