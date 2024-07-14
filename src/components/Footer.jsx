import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-bg text-center p-8">
      <p className="text-text text-sm mb-4">
        All rights Reserved by Cars N Gaz
      </p>
      <div className="flex flex-row gap-8 justify-center items-center text-text">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/cars_n_gaz/?hl=fr"
          className="hover:text-butcol"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tiktok.com/@carsngaz"
          className="hover:text-butcol"
        >
          <FaTiktok />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@carsngaz1957"
          className="hover:text-butcol"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
