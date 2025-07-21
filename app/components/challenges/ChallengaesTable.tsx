import React from "react";
import { Challenge } from "../../types";
import ChallengeItem from "./ChallengeItem";

const ChallengesTable = ({
  challengesData,
  setSelectedChallenge,
}: {
  challengesData: any[];
  setSelectedChallenge: (challenge: Challenge) => void;
}) => {
  return (
    <ul className="space-y-2">
      {challengesData.map((challenge, index) => (
        <div key={index} className="flex">
          <div className="w-1 bg-[#F9A826] rounded-l-full mr-4"></div>
          <div className="flex-grow">
            <ChallengeItem challenge={challenge} onSelect={setSelectedChallenge} />
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ChallengesTable;
