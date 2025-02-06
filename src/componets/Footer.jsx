import React from "react";
import githubLogo from "../assets/github.png";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-black text-white flex items-center justify-center">
      <p>© {new Date().getFullYear()} </p>
    </div>
  );
}

export default Footer;
