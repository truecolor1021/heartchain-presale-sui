import React from "react";
import { LnuPresale } from "../components/landing/LnuPresale";
import Introduce from "../components/landing/Introduce";
import Tokenomics from "../components/landing/Tokenomics";
import Roadmap from "../components/landing/Roadmap";
import CombinedSection from "../components/landing/ProblemStatement";
import HTCNEcosystem from "../components/landing/HTCNEcosystem";
import DividerSection from "../components/landing/DivideSection";
import SolutionOvw from "../components/landing/SolutionOvw";
// import DonutChartComponent from "../components/landing/Card";

const HomePage = () => {
  return (
    <>
      {/* <LnuPresale /> */}
      {/* <DividerSection /> */}
      <Introduce />
      {/* <DividerSection /> */}

      <CombinedSection />
      {/* <DividerSection /> */}
      <SolutionOvw />

      <HTCNEcosystem />
      {/* <DividerSection /> */}

      <Tokenomics />
      {/* <DividerSection /> */}

      {/* <PresaleStage /> */}
      <Roadmap />
    </>
  );
};

export default HomePage;
