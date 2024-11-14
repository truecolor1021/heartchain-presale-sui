import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full text-white py-8 px-6"
      style={{ backgroundColor: "#606068" }}
    >
      {/* SVG Divider */}
      <div className="flex justify-center mb-6">
        <svg
          width="100"
          height="20"
          viewBox="0 0 100 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 H100"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Copyright Information */}
      <div className="text-center">© 2024 OceanDoge. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
