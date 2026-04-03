import React from "react";
import logo from '../../../public/assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter  } from "react-icons/fa6";

const Footer = () => {
  return (
<div className="bg-black">
      <div className="max-w-7xl mx-auto">
      <footer className="footer sm:footer-horizontal text-white p-10 w-full">
        <aside>
        <img src={logo} alt="footer-logo" />
          <p className="w-90">
           <span className="font-semibold text-xl"> CAR Industries Ltd.</span>
            <br />
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
          </p>
        {/* Social icons */}
        <div className="flex gap-x-3">
          <FaFacebook className="bg-[#2c2c2c] w-10 h-10 p-2.5 rounded-2xl text-white font-[16px]" />
          <FaSquareInstagram className="bg-[#2c2c2c] w-10 h-10 p-2.5 rounded-2xl text-white font-[16px]" />
          <FaSquareXTwitter className="bg-[#2c2c2c] w-10 h-10 p-2.5 rounded-2xl text-white font-[16px]" />
        </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
</div>
  );
};

export default Footer;
