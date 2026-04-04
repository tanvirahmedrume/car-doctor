import React from "react";

const Forms = ({
  showServicesFields = false,
  showContactFields = false,
  handleSubmit,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-20">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-[#FF3811] to-[#FF6B3A] px-8 py-6">
          <h2 className="text-2xl font-bold text-white">
            {showServicesFields ? "Add New Service" : showContactFields ? "Checkout" : "📝 Get in Touch"}
          </h2>
          <p className="text-white/80 text-sm mt-1">
            {showServicesFields 
              ? "Fill out the details below to add a new service" 
              : showContactFields 
              ? "Complete your purchase by providing your information" 
              : "We'd love to hear from you"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* AddNewService Page - Service fields only */}
          {showServicesFields === true && (
            <div className="space-y-5">
              {/* Service Name + Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name <span className="text-[#FF3811]">*</span>
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    placeholder="e.g., Web Development"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                    placeholder:text-gray-400 text-gray-700 transition-all duration-300
                    hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Price <span className="text-[#FF3811]">*</span>
                  </label>
                  <input
                    type="text"
                    name="servicePrice"
                    placeholder="e.g., $99"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                    placeholder:text-gray-400 text-gray-700 transition-all duration-300
                    hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Service Type Dropdown */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type <span className="text-[#FF3811]">*</span>
                </label>
                <select
                  name="serviceType"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                  focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                  text-gray-700 transition-all duration-300 hover:border-gray-300"
                >
                  <option value="">Select Service Type</option>
                  <option value="repair">Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="installation">Installation</option>
                </select>
              </div>

              {/* Product Description */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your product or service requirements in detail..."
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                  focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                  placeholder:text-gray-400 text-gray-700 resize-none transition-all duration-300
                  hover:border-gray-300"
                ></textarea>
              </div>
            </div>
          )}

          {/* Checkout Page - Contact fields only */}
          {showContactFields === true && (
            <div className="space-y-5">
              {/* First Name + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-[#FF3811]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                    placeholder:text-gray-400 text-gray-700 transition-all duration-300
                    hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-[#FF3811]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                    placeholder:text-gray-400 text-gray-700 transition-all duration-300
                    hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-[#FF3811]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                    placeholder:text-gray-400 text-gray-700 transition-all duration-300
                    hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-[#FF3811]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                    focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                    placeholder:text-gray-400 text-gray-700 transition-all duration-300
                    hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Your Message */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-[#FF3811]">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Please write your message here..."
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl 
                  focus:outline-none focus:border-[#FF3811] focus:ring-4 focus:ring-[#FF3811]/10
                  placeholder:text-gray-400 text-gray-700 resize-none transition-all duration-300
                  hover:border-gray-300"
                ></textarea>
              </div>
            </div>
          )}

          {/* Message Field for Services Page */}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-[#FF3811] to-[#FF6B3A] 
              text-white py-3.5 rounded-xl font-semibold text-lg shadow-lg
              hover:shadow-xl hover:scale-[1.02] transition-all duration-300
              overflow-hidden"
            >
              <span className="relative z-10">
                {showServicesFields ? "Add Service" : showContactFields ? "Complete Checkout" : "📤 Send Message"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e6320f] to-[#FF5A2A] 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Forms;