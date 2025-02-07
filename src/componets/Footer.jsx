import React from "react";
import githubLogo from "../assets/github.png";

function Footer() {
  return (
    <div className="  w-full h-20 bg-black text-white flex items-center justify-center">
      <p>© {new Date().getFullYear()} </p>
    </div>
  );
}

export default Footer;
