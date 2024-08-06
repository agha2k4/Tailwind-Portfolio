import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-3">
      <div className="mt-5 flex-shrink">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
