import React from "react";
import { Banner } from "../../components/Banner/Banner";
import Forms from "../../components/Forms/Forms";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const navigate = useNavigate();
  const { title, _id, price, img } = service || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName?.value || "";
    const lastName = form.lastName?.value || "";
    const phone = form.phone?.value || "";
    const email = form.email?.value || "";

    const bookingData = {
      img: img,
      serviceId: _id,
      serviceTitle: title,
      price: price,
      customerInfo: {
        firstName,
        lastName,
        phone,
        email,
      },
      bookingDate: new Date().toISOString(),
      status: "pending",
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully submited",
            icon: "success",
            draggable: true,
          });
          navigate('/')
        }
      });

    form.reset();
  };

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 mt-10 lg:mt-20">
        <Banner title="Checkout"></Banner>
        <div className="text-center py-20">
          <p className="text-red-500 text-xl">Service not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 lg:mt-20">
      <Banner title="Checkout"></Banner>

      {/* Service Details Card */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="rounded-2xl bg-gradient-to-r from-[#FF3811] to-[#FF6B3A] shadow-xl">
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Side - Service Info */}
            <div className="flex items-center gap-4">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500">Service Name</p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  {title}
                </h2>
              </div>
            </div>

            {/* Right Side - Price */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">Total Price</p>
              <p className="text-3xl font-bold text-[#FF3811]">${price}</p>
              <p className="text-xs text-gray-400 mt-1">Including all taxes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Information Form */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Customer Information</h3>
        <Forms
          showServicesFields={false}
          showContactFields={true}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Checkout;
