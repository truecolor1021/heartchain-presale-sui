import React from "react";

const Roadmap = () => {
  return (
    <div className="flex justify-center bg-gray-800 py-10 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-white text-2xl font-semibold mb-10">
          HeartChain Inu Roadmap
        </h1>
        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 text-white text-2xl font-bold flex items-center justify-center">
              1
            </div>
            <div className="ml-6">
              <h2 className="text-white font-semibold text-lg">
                Phase 1: Development (Q4 2024)
              </h2>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>• Finalize platform architecture.</li>
                <li>• Develop NFT minting functionality.</li>
                <li>• Launch initial marketing campaigns.</li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-500 text-white text-2xl font-bold flex items-center justify-center">
              2
            </div>
            <div className="ml-6">
              <h2 className="text-white font-semibold text-lg">
                Phase 2: Beta Launch (Q1-2 2025)
              </h2>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>• Launch beta version of HeartChain Inu platform.</li>
                <li>• Begin user onboarding and feedback collection.</li>
                <li>
                  • Initiate partnerships with influencers in the dating space.
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500 text-white text-2xl font-bold flex items-center justify-center">
              3
            </div>
            <div className="ml-6">
              <h2 className="text-white font-semibold text-lg">
                Phase 3: Full Launch (Q3 2025)
              </h2>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>• Officially launch HeartChain Inu platform.</li>
                <li>• Expand marketing efforts globally.</li>
                <li>• Introduce additional features based on user feedback.</li>
              </ul>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center">
              4
            </div>
            <div className="ml-6">
              <h2 className="text-white font-semibold text-lg">
                Phase 4: Community Growth (Q4 2025+)
              </h2>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>• Host community events and IRL gatherings.</li>
                <li>
                  • Implement governance features, allowing token holders to
                  vote on platform changes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
