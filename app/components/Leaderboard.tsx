import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { LeaderboardEntry } from "../types";

const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, teamName: "Full Name", points: 44, totalPoints: 50, submissions: 5 },
    { rank: 2, teamName: "Full Name", points: 44, totalPoints: 50, submissions: 5 },
    { rank: 3, teamName: "Full Name", points: 44, totalPoints: 50, submissions: 5 },
    { rank: 4, teamName: "Full Name", points: 44, totalPoints: 50, submissions: 5 },
    { rank: 5, teamName: "Full Name", points: 43, totalPoints: 50, submissions: 5 },
    { rank: 6, teamName: "Full Name", points: 43, totalPoints: 50, submissions: 5 },
    { rank: 7, teamName: "Full Name", points: 38, totalPoints: 50, submissions: 5 },
    { rank: 8, teamName: "Full Name", points: 38, totalPoints: 50, submissions: 5 },
    { rank: 9, teamName: "Full Name", points: 38, totalPoints: 50, submissions: 5 },
];

const getRowStyle = (rank: number) => {
    switch (rank) {
        case 1:
            return "bg-[#F9A826] text-white";
        case 2:
            return "bg-[#FBBF24] text-white";
        case 3:
            return "bg-[#FCD34D] text-gray-800";
        case 6:
            return "border border-yellow-400";
        default:
            return "bg-white";
    }
};

const LeaderboardPage: React.FC = () => {
    return (
        
            <div className=" mx-auto  rounded-2xl shadow-lg">
                <div className="grid grid-cols-12 gap-4 px-6 py-4 text-left font-bold text-gray-600">
                    <div className="col-span-1"></div>
                    <div className="col-span-5">Team name</div>
                    <div className="col-span-3">Points</div>
                    <div className="col-span-3">Question Submittents</div>
                </div>

                <ul className="space-y-3">
                    {leaderboardData.map((entry) => (
                        <li
                            key={entry.rank}
                            className={`grid grid-cols-12 gap-4 items-center p-4 rounded-xl transition-shadow duration-200 hover:shadow-md ${getRowStyle(
                                entry.rank
                            )}`}
                        >
                            <div className={`col-span-1 font-bold ${entry.rank <= 3 ? "text-white" : "text-yellow-500"}`}>
                                #{entry.rank}
                            </div>
                            <div className="col-span-5 flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-full ${entry.rank <= 3 ? "bg-white bg-opacity-30" : "bg-gray-200"}`}
                                ></div>
                                <span className={`font-semibold ${entry.rank <= 3 ? "text-white" : "text-gray-800"}`}>
                                    {entry.teamName}
                                </span>
                            </div>
                            <div
                                className={`col-span-3 font-semibold ${entry.rank <= 3 ? "text-white text-opacity-90" : "text-gray-500"
                                    }`}
                            >
                                {entry.points}
                                <span className={`${entry.rank <= 3 ? "text-opacity-70" : "text-gray-400"}`}>/{entry.totalPoints}</span>
                            </div>
                            <div
                                className={`col-span-3 font-semibold ${entry.rank <= 3 ? "text-white text-opacity-90" : "text-gray-500"
                                    }`}
                            >
                                {entry.submissions}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        
    );
};

export default LeaderboardPage;