import React from "react";

const Tokenomics: React.FC = () => {
  const distributionData = [
    { name: "Staking Rewards", value: 40 },
    { name: "Initial Liquidity", value: 30 },
    { name: "Ecosystem Development", value: 10 },
    { name: "Founders", value: 10 },
    { name: "Presale", value: 10 },
  ];

  const COLORS = ["purple", "orange", "brown", "pink", "yellow"];

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
          strokeWidth="40"
          strokeDasharray={`${circumference * percentage} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      );
    });
  };

  return (
    <section className="text-gray-800 py-16 px-4 max-w-1300 m-auto ">
      {/* Header */}
      <h2 className="text-4xl mt-40 md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-800  text-transparent text-center bg-clip-text mb-12">
        HTCN Tokenomics
      </h2>

      {/* Token Utility */}
      <div className="text-center py-12 mt-50">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Card Template */}
          {[
            {
              title: "Minting & Purchasing",
              description: "Minting and purchasing Flirt, FM2TM.",
              svgPath:
                "M12 8c-3.31 0-6 1.79-6 4s2.69 4 6 4 6-1.79 6-4-2.69-4-6-4zM12 4v4M8 12h.01M16 12h.01M12 16v2",
            },
            {
              title: "Governance",
              description:
                "Participating in platform governance through voting on key decisions.",
              svgPath: "M6 12h12M6 8h12M6 16h12M4 6h16v12H4z",
            },
            {
              title: "Rewards",
              description:
                "Rewarding users for engagement and contributions to the community.",
              svgPath:
                "M12 8.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5zM12 2v4m0 12v4m4.39-10.11l2.83-2.83m-14.83 2.83L7.61 8.89m0 6.22L4.78 18.94m14.83-2.83L16.39 15.11",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-40 pb-40 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl w-450 md:w-450 mx-auto"
            >
              <span className="absolute top-0 left-0 z-0 h-32 w-42 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]" />
              <div className="relative z-10 mx-auto max-w-xs">
                <span className="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                  <svg
                    className="h-40 w-40 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 25 25"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={card.svgPath}
                    />
                  </svg>
                </span>
                <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="font-medium">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token Distribution */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h3 className="text-2xl mt-50 font-semibold text-white mb-6">
          Token Distribution
        </h3>
        <img
          src="./landing/Picture13.png"
          alt="HeartChain Inu Illustration"
          className="w-full max-w-md md:max-w-2xl h-auto rounded-lg"
        />
        {/* <svg width="600" height="600" viewBox="0 0 300 300">
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
        </svg> */}
        <div className="mt-8 flex justify-center flex-wrap gap-4">
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
        <p className="text-lg text-gray-700">
          Our tokenomics ensure a balanced and sustainable ecosystem with
          rewards and governance rights for token holders.
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;
