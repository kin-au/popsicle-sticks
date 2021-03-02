import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center text-xs mt-4 mb-2">
        <p>by Kin</p>
        <a
          className="hover:text-blue-700 hover:animate-pulse transition-colors duration-200"
          href="https://kinau.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          kinau.co.uk
        </a>
      </footer>
    </>
  );
}

export default Footer;
