"use client";
import React, { useState } from "react";
import { Clock, XCircle, Award } from "lucide-react";
import { Challenge } from "../../types/index";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import ChallengeDetails from "../../components/challenges/ChallenageDetails";
import ChallengeItem from "../../components/challenges/ChallengeItem";

const Timer = () => <div className="text-2xl font-bold font-mono text-gray-800">02:25:20</div>;
const challengesData: Challenge[] = [
  {
    id: 1,
    title: "Turn Ideas into Interfaces",
    duration: "2hr",
    points: 50,
    status: "Not Submitted",
    description:
      "Lorem ipsum dolor sit amet consectetur. Orci amet hendrerit vitae ut tortor vitae libero facilis. Arcu sapien arcu quis fermentum. Egestas massa risus convallis tortor malesuada mi erat tempus. Tincidunt euismod nam est proin.Lorem ipsum dolor sit amet consectetur. Orci amet hendrerit vitae ut tortor vitae libero facilis. Arcu sapien arcu quis fermentum. Egestas massa risus convallis tortor malesuada mi erat tempus. Tincidunt euismod nam est proin.Lorem ipsum dolor sit amet consectetur. Orci amet hendrerit vitae ut tortor vitae libero facilis. Arcu sapien arcu quis fermentum.",
    criteria: [
      { text: "From Sketch to Screen.", points: 15 },
      { text: "Shape the Web, One Page at a Time.", points: 20 },
      { text: "Shape the Web, One Page at a Time.", points: 5 },
      { text: "From Sketch to Screen.", points: 10 },
    ],
  },

  {
    id: 2,
    title: "Backend API Challenge",
    duration: "3hr",
    points: 75,
    status: "Not Submitted",
    description: "...",
    criteria: [],
  },
  {
    id: 3,
    title: "Database Design Task",
    duration: "1hr",
    points: 40,
    status: "Not Submitted",
    description: "...",
    criteria: [],
  },
  {
    id: 4,
    title: "CI/CD Pipeline Setup",
    duration: "2hr",
    points: 60,
    status: "Not Submitted",
    description: "...",
    criteria: [],
  },
];

const ChallengesPage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  if (selectedChallenge) {
    return (
      <div className="font-sans bg-gray-50 min-h-screen p-8">
        <ChallengeDetails challenge={selectedChallenge} onBack={() => setSelectedChallenge(null)} />
      </div>
    );
  }
  return (
    <MaxWidthWrapper className=" min-h-screen">
      <div className=" mx-auto bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Filter:</span>
            <button className="bg-[#F9A826] text-white text-sm font-semibold py-1 px-3 rounded-md">
              Not Submitted
            </button>
            <button className="bg-gray-200 text-gray-600 text-sm font-semibold py-1 px-3 rounded-md">Submitted</button>
          </div>
          <Timer />
        </div>

        <ul className="space-y-2">
          {challengesData.map((challenge) => (
            <div key={challenge.id} className="flex">
              <div className="w-1 bg-[#F9A826] rounded-l-full mr-4"></div>
              <div className="flex-grow">
                <ChallengeItem challenge={challenge} onSelect={setSelectedChallenge} />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default ChallengesPage;
