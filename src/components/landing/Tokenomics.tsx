import React from "react";
import {
  MonetizationOn as CoinsIcon,
  Gavel as GavelIcon,
  EmojiEvents as TrophyIcon,
} from "@mui/icons-material";

const Tokenomics: React.FC = () => {
  // Token Distribution Data
  const distributionData = [
    { name: "Staking Rewards", value: 40 },
    { name: "Initial Liquidity", value: 30 },
    { name: "Ecosystem Development", value: 10 },
    { name: "Founders", value: 10 },
    { name: "Presale", value: 10 },
  ];

  // Colors for Pie Chart Segments
  const COLORS = ["#34D399", "#60A5FA", "#FBBF24", "#FB7185", "#A78BFA"];

  // Function to create SVG pie chart segments
  const createPieChart = (data: typeof distributionData, colors: string[]) => {
    const radius = 100;
    const circumference = 2 * Math.PI * radius;
    let cumulativePercentage = 0;

    return data.map((entry, index) => {
      const percentage = entry.value / 100;
      const offset = circumference * (1 - cumulativePercentage);
      cumulativePercentage += percentage;

      return (
        <circle
          key={index}
          cx="150"
          cy="150"
          r={radius}
          fill="transparent"
          stroke={colors[index % colors.length]}
          strokeWidth="20"
          strokeDasharray={`${circumference * percentage} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      );
    });
  };

  return (
    // <section className="py-16 px-4">
    <section className="bg-gray-900 text-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Tokenomics</h2>
        <p className="text-lg text-gray-600 mt-2">
          HeartChain Inu Ecosystem Explained
        </p>
      </div>

      {/* Token Utility */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Minting & Purchasing */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <CoinsIcon className="text-3xl text-green-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800">
            Minting & Purchasing
          </h3>
          <p className="text-gray-600">
            Mint and purchase tokens for access and rewards.
          </p>
        </div>
        {/* Governance */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <GavelIcon className="text-3xl text-blue-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800">Governance</h3>
          <p className="text-gray-600">
            Vote on platform governance decisions.
          </p>
        </div>
        {/* Rewards */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <TrophyIcon className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800">Rewards</h3>
          <p className="text-gray-600">
            Earn rewards by engaging with the community.
          </p>
        </div>
      </div>

      {/* Token Distribution */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Token Distribution
        </h3>
        <svg width="300" height="300" viewBox="0 0 300 300">
          {createPieChart(distributionData, COLORS)}
          <text
            x="150"
            y="150"
            textAnchor="middle"
            dy=".3em"
            className="text-lg font-semibold fill-gray-800"
          >
            100%
          </text>
        </svg>
        {/* Legend */}
        <div className="mt-8 flex justify-center flex-wrap space-x-4">
          {distributionData.map((entry, index) => (
            <div key={index} className="flex items-center">
              <span
                className="w-4 h-4 inline-block mr-2 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="text-gray-700">
                {entry.name} - {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary & Key Benefits */}
      <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-6">
          Our tokenomics ensure a balanced and sustainable ecosystem with
          rewards and governance rights for token holders.
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;
