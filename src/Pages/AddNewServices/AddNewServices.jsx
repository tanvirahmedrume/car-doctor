import React from "react";
import { Banner } from "../../components/Banner/Banner";
import Forms from "../../components/Forms/Forms";

const AddNewServices = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted from AddNewServices");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 lg:mt-20">
      <Banner title="Add New Service"></Banner>

      <Forms
        showServicesFields={true}
        showContactFields={false}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddNewServices;