import React from "react";
import "../components/section1.css";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="custom4 flex flex-col items-center justify-center gap-10">
        <div></div>

        <p className="w-1/3 text-wrap text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
        <nav className="">
          <ul className="flex justify-center items-center gap-20">
            <li className="cursor-pointer text-blue-600">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">History</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </nav>
        <ul className="flex justify-center items-center gap-20">
          <FaFacebook />
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          <FaGithub></FaGithub>
        </ul>
      </div>
    </>
  );
}

export default Footer;
