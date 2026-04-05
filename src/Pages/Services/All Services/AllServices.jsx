import React, { useEffect, useState } from "react";
import ServiceCard from "../../../components/Services/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    fetch("http://localhost:5000/services", { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => abortController.abort();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#FF3811] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-20">
        <p className="text-xl font-semibold">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-6 py-2 bg-[#FF3811] text-white rounded hover:bg-[#ff5722] transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center text-gray-500 py-20">
        <p className="text-2xl">No services found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">All Services</h1>
        <p className="text-gray-600 mt-2">Browse all our available services</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;