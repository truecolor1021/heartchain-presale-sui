import React from "react";

const ProblemStatement: React.FC = () => {
  return (
    // <section className=" text-white py-16 px-4">
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Problem Statement</h2>

          {/* Summary of Problems and Solution */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            HeartChain Inu aims to solve key challenges in crypto-based online
            matchmaking, including authenticity, privacy, and gender balance. By
            using facially verified NFTs, our platform ensures users are who
            they claim to be, creating a trustworthy environment. We also
            address privacy concerns by implementing KYC without storing
            sensitive data, and we incentivize balanced participation through
            airdrops and dedicated support for female users.
          </p>

          {/* Key Points */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <ul className="space-y-4 text-left">
              <li>
                <strong>Authenticity:</strong> Verified identities with NFTs
                prevent profile misrepresentation.
              </li>
              <li>
                <strong>Privacy:</strong> Minimal KYC with no data storage
                ensures user privacy.
              </li>
              <li>
                <strong>Gender Balance:</strong> Incentives encourage diverse
                participation and balanced community growth.
              </li>
              <li>
                <strong>Global Advisors:</strong> Local advisors support safe
                and culturally aware matchmaking.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="./landing/Picture6.png" // Replace with actual image path
            alt="HeartChain Inu Illustration"
            className="w-800 h-auto max-w-sm rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
