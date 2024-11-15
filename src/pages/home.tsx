import React from "react";
import { LnuPresale } from "../components/landing/LnuPresale";
import Introduce from "../components/landing/Introduce";
import Tokenomics from "../components/landing/Tokenomics";
import Roadmap from "../components/landing/Roadmap";
import HTCNEcosystem from "../components/landing/HTCNEcosystem";
import SolutionOvw from "../components/landing/SolutionOvw";
import ProblemStatement from "../components/landing/ProblemStatement";
// import DonutChartComponent from "../components/landing/Card";

const HomePage = () => {
  return (
    <>
      {/* <LnuPresale></LnuPresale> */}
      <Introduce />

      <ProblemStatement />

      <SolutionOvw />

      <HTCNEcosystem />

      <Tokenomics />

      <Roadmap />
    </>
  );
};

export default HomePage;
