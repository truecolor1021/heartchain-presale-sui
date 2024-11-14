import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const SolutionOvw: React.FC = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isInView]);

  return (
    <section ref={ref} className="text-white pb-16">
      {/* Problem Statement Section */}

      <h2 className="text-4xl mt-80 md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-800 text-transparent text-center bg-clip-text mb-10">
        Solution Overview
      </h2>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Flirt NFT Card */}
        <motion.div
          className="p-4 rounded-xl mt-40 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
            <img
              src="./landing/Picture7.png"
              alt="Flirt NFT"
              className="w-full max-w-xs h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Flirt NFT
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              This NFT unlocks the ability for the buying user to chat with the
              issuing user and serves as the building block of social activity
              on the platform. It serves as a key that grants access to direct
              messaging features within the platform and plays a role in the
              ability to stake HTCN. <br />
              To prevent abuse, the maximum resale price will be 300% of locked
              value. Each Flirt NFT will be a selfie photo displaying the
              issuer's age and gender taken from their government-issued ID
              during KYC.
            </p>
          </div>
        </motion.div>
        {/* Fly Me to the Moon NFT Card */}
        <motion.div
          className="p-4 rounded-xl  flex flex-col mb-40 md:flex-row-reverse items-center gap-6"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
            <img
              src="./landing/Picture20.png"
              alt="Fly Me to the Moon NFT"
              className="w-full max-w-xs h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Fly Me to the Moon NFT
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              The more exclusive type of NFT on our platform. FM2TMs have
              multiple use cases and are the only mechanism for staking HTCN. A
              couple that meets on our platform can mint one as a memento of how
              they met and use it to stake for rewards.
              <br />
              Transfer of this type of NFT to the HeartChain Inu team will earn
              the issuer access to facilitation services for the couple's
              meeting, including travel arrangements and local guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOvw;
