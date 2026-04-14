import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://car-doctor-server-production-153a.up.railway.app/services")
      .then((res) => res.json())
      .then((data) => {
        // শুধু প্রথম ৩টি সার্ভিস দেখাবে হোম পেজে
        setServices(data.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF3811] mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="flex flex-col items-center text-center lg:w-150 mx-auto px-4">
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
      <div className="grid mx-5 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to={"/all-services"}>
          <button className="btn my-10 border border-orange-600 text-orange-600 bg-transparent hover:bg-orange-600 hover:text-white">
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
