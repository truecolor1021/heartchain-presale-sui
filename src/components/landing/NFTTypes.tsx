import React from "react";

const NFTTypes: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* First Section - Flirt NFT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-bold">Flirt NFT</h3>
            <p className="text-lg text-gray-300">
              This NFT unlocks the ability for the buying user to chat with the
              issuing user and serves as the building block of social activity
              on the platform. It serves as a key that grants access to direct
              messaging features within the platform and plays a role in the
              ability to stake HTCN. This NFT basically allows two consenting
              adults to get to know each other and move forward (or not) as they
              see fit. Flirt NFTs can be minted for a small locked-value fee,
              and purchased on the marketplace via fixed price or auction as the
              minter prefers.
            </p>
            <p className="text-lg text-gray-300">
              To prevent abuse, the maximum resale price will be 300% of locked
              value. Each Flirt NFT will be a selfie photo displaying the
              issuer's age and gender taken from their government-issued ID
              during KYC. The locked tokens burned when a flirt is used up play
              a dynamic deflationary role as detailed in the tokenomics section.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="./landing/Picture7.png" // Replace with the actual image path
              alt="Flirt NFT"
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Section - Fly Me to the Moon NFT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center order-last md:order-first">
            <img
              src="./landing/Picture20.png" // Replace with the actual image path
              alt="Fly Me to the Moon NFT"
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-bold">Fly Me to the Moon NFT</h3>
            <p className="text-lg text-gray-300">
              The more exclusive type of NFT on our platform. FM2TMs have
              multiple use cases and are the only mechanism for staking HTCN. A
              couple that meets on our platform can mint one as a memento of how
              they met and use it to stake for rewards, or they may decide to
              sell it at a premium on the marketplace.
            </p>
            <p className="text-lg text-gray-300">
              Transfer of this type of NFT to the HeartChain Inu team will earn
              the issuer access to facilitation services for the couple's
              meeting, including travel arrangements and local guidance. Minting
              an FM2TM costs substantially more than a Flirt NFT, ensuring
              mutual consent to a real-life meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTTypes;
