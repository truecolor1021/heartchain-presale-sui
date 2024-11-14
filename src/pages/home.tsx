import React from "react";
import { LnuPresale } from "../components/landing/LnuPresale";
import Introduce from "../components/landing/Introduce";
import Tokenomics from "../components/landing/Tokenomics";
import PresaleStage from "../components/landing/PresaleStage";
import Roadmap from "../components/landing/Roadmap";
import ProblemStatement from "../components/landing/ProblemStatement";
import NFTTypes from "../components/landing/NFTTypes";
import FlirtNFTProcessFlow from "../components/landing/FlirtNFTProcessFlow";
import HTCNEcosystem from "../components/landing/HTCNEcosystem";

const HomePage = () => {
  return (
    <>
      <LnuPresale />
      <Introduce />
      <ProblemStatement />
      <NFTTypes />
      <FlirtNFTProcessFlow />
      <HTCNEcosystem />
      <Tokenomics />
      {/* <PresaleStage /> */}
      <Roadmap />
    </>
  );
};

export default HomePage;
