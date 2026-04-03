import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center text-center lg:w-[600px] mx-auto">
        <h4 className="text-[#FF3811] font-semibold uppercase">Service</h4>
        <h1 className="text-2xl lg:text-5xl font-bold mt-2">
          Our Service Area
        </h1>
        <p className="text-[#737373] mt-4">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* SERVICE CARD */}
      <div className="grid mx-5 md:grid-cols-2 lg:grid-cols-3 gap-x-5 ">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}

      </div>
              <div className="flex justify-center">
          <button className="btn my-10 border border-orange-600 text-orange-600 bg-transparent hover:bg-orange-600 hover:text-white">
            More Services
          </button>
        </div>
    </div>
  );
};

export default Services;
