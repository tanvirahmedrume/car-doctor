import React from "react";
import { Banner } from "../../components/Banner/Banner";
import Forms from "../../components/Forms/Forms";

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted from Checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 lg:mt-20">
      <Banner title="Checkout"></Banner>

      <Forms
        showServicesFields={false}
        showContactFields={true}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Checkout;