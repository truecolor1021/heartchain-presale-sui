import React from "react";

const HTCNEcosystem: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Utility and Use-Case of the HTCN Ecosystem
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            The HTCN ecosystem is designed to address modern relationship
            challenges. Through blockchain-backed, verifiable connections, it
            offers an authentic and secure platform for users seeking meaningful
            relationships. By minting NFTs, users create lasting digital
            memories of their connections. This innovative approach combines the
            emotional significance of traditional tokens with the transparency
            and value of blockchain assets, making it a unique solution in the
            relationship space.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="./landing/Picture17.png" // Replace with actual image path
            alt="HTCN Ecosystem Illustration"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HTCNEcosystem;
