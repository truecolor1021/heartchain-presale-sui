import React from "react";

const FlirtNFTProcessFlow: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Flirt Minting Process
        </h2>

        {/* Flowchart Container */}
        <div className="flex flex-col items-center space-y-8">
          {/* Step 1 */}
          <FlowStep text="Start: User Access" />

          <Arrow />

          {/* Step 2 */}
          <FlowStep text="Take Selfie for KYC" />

          <Arrow />

          {/* Step 3 */}
          <FlowStep text="Set NFT Image" />

          <Arrow />

          {/* Step 4 */}
          <FlowStep text="Verification" />

          <Arrow />

          {/* Step 5 */}
          <FlowStep text="Mint in Batches of 12" />

          <Arrow />

          {/* Step 6 */}
          <FlowStep text="Digital Signature Option" />

          <Arrow />

          {/* Step 7 */}
          <FlowStep text="Buyer Gains 20 Messages" />

          <Arrow />

          {/* Step 8 */}
          <FlowStep text="Flirt NFT Burned" />

          <Arrow />

          {/* Step 9 - Final Options */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4">
            <FlowStep text="No NFTs Left: Repeat KYC" isFinal />
            <FlowStep text="Sold Out NFTs Visible on Profile" isFinal />
          </div>
        </div>
      </div>
    </section>
  );
};

// Flow Step Component
const FlowStep: React.FC<{ text: string; isFinal?: boolean }> = ({
  text,
  isFinal,
}) => (
  <div
    className={`flex items-center justify-center text-center px-6 py-4 rounded-lg shadow-lg ${
      isFinal ? "bg-indigo-600" : "bg-gray-800"
    }`}
  >
    <span className="text-lg font-semibold">{text}</span>
  </div>
);

// Arrow Component
const Arrow = () => (
  <div className="flex items-center justify-center my-2">
    <span className="block w-0.5 h-8 bg-gray-400"></span>
    <span className="block w-4 h-4 border-l-2 border-t-2 border-gray-400 transform rotate-45 -ml-2"></span>
  </div>
);

export default FlirtNFTProcessFlow;
