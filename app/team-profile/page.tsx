import React from "react";
import { Trophy, Plus, Star } from "lucide-react";
import { TeamProfile } from "../types";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const teamProfileData: TeamProfile = {
  avatarUrl: "/ava.png",
  name: "Team Name",
  category: "Cybersecurity",
  rank: 5,
  solvedCount: 5,
  totalChallenges: 10,
  points: 50,
  members: [
    { name: "Ross Metz", email: "Eugene34@gmail.com" },
    { name: "Rodney Keebler DVM", email: "Montana.Mayert11@yahoo.com" },
    { name: "Irving Tillman", email: "Shanna27@yahoo.com" },
    { name: "Abel Von", email: "Serena.Feeney97@gmail.com" },
  ],
  solvedChallenges: [
    { title: "Turn Ideas into Interfaces", link: "link/files/solve" },
    { title: "Turn Ideas into Interfaces", link: "link/files/solve" },
    { title: "Turn Ideas into Interfaces", link: "link/files/solve" },
    { title: "Turn Ideas into Interfaces", link: "link/files/solve" },
  ],
};

const TeamProfilePage: React.FC = () => {
  const { avatarUrl, name, category, rank, solvedCount, totalChallenges, points, members, solvedChallenges } =
    teamProfileData;

  return (
    <MaxWidthWrapper className="  p-8">
      <div className=" mx-auto bg-white p-8 rounded-lg shadow-sm">
        <div className="flex px-4 py-2 items-center gap-6 pb-6 border-b border-gray-200">
          <img src={avatarUrl} alt="Team Avatar" className="w-20 h-20 rounded-lg" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-gray-500">{category}</p>
            <div className="flex items-center gap-4 mt-2 text-sm font-semibold text-gray-600">
              <span className="flex items-center gap-1.5 text-yellow-600">
                <Trophy size={16} /> Rank {rank}
              </span>
              <span className="flex items-center gap-1.5">
                <Plus size={16} /> {solvedCount}/{totalChallenges} solved
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={16} /> {points} Point
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="  rounded-lg  ">
            <h2 className="text-lg bg-[#FFEECC] p-6 font-bold text-gray-800 mb-4">Members Information</h2>
            <div className="grid grid-cols-1 px-4 py-2  gap-x-8 gap-y-4">
              {members.map((member, index) => (
                <div key={index}>
                  <p className="font-semibold text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <div className=" rounded-lg ">
            <h2 className="text-lg p-6 r bg-[#FFEECC]  font-bold text-gray-800 mb-4">Solved Challenges</h2>
            <ul className="px-4 flex flex-col gap-4  py-2">
              {solvedChallenges.map((challenge, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">{challenge.title}</p>
                    <p className="text-sm text-gray-500">{challenge.link}</p>
                  </div>
                  <button className="bg-white border border-yellow-400 text-yellow-700 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-yellow-50 transition">
                    Challenge Details
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TeamProfilePage;
