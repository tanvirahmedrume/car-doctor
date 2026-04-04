import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrooled, setScrooled] = useState(false);

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 50) {
        setScrooled(true);
      } else {
        setScrooled(false);
      }
    };

    window.addEventListener("scroll", handleScrool);
    return () => window.removeEventListener("scroll", handleScrool);
  }, []);

  const NavLinks = (
<>
  <li>
    <Link to={'/'} className="hover:underline transform transition-transform duration-500 ease-out hover:-translate-y-2">
      Home
    </Link>
  </li>
  <li>
    <Link className="hover:underline transform transition-transform duration-500 ease-out hover:-translate-y-2">
      About
    </Link>
  </li>
  <li>
    <Link to={'/service'} className="hover:underline transform transition-transform duration-500 ease-out hover:-translate-y-2">
      Services
    </Link>
  </li>
  <li>
    <Link className="hover:underline transform transition-transform duration-500 ease-out hover:-translate-y-2">
      Blog
    </Link>
  </li>
  <li>
    <Link className="hover:underline transform transition-transform duration-500 ease-out hover:-translate-y-2">
      Contact
    </Link>
  </li>
</>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 
                    ${scrooled ? "bg-black text-[#FF3811]" : "bg-base-200"}`}
    >
      <div className="navbar py-3.5 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <img src={Logo} alt="logo" className="w-25.25 h-13.5" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-secondary ">Appoitment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
