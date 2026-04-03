import React from "react";
import notfound from "../../../public/assets/images/notfound/Frame.png";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-center">
      <img src={notfound} alt="Not Found" className="w-full max-w-md mb-6" />

      <Link to="/" className="btn btn-error text-white">
        Go To Home
      </Link>
    </div>
  );
};

export default Notfound;
