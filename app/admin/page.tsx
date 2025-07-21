"use client";
import { Plus } from "lucide-react";
import ChallengesTable from "../components/challenges/ChallengaesTable";
import { Challenge } from "../types";
import { useState } from "react";
import Link from "next/link";

const AdminDashboardPage: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    { id: 1, title: "Turn Ideas into Interfaces", duration: "2hr", points: 50, status: "Not Submitted" },
    { id: 2, title: "Turn Ideas into Interfaces", duration: "2hr", points: 50, status: "Not Submitted" },
    { id: 3, title: "Turn Ideas into Interfaces", duration: "2hr", points: 50, status: "Not Submitted" },
    { id: 4, title: "Turn Ideas into Interfaces", duration: "2hr", points: 50, status: "Not Submitted" },
    { id: 5, title: "Turn Ideas into Interfaces", duration: "2hr", points: 50, status: "Not Submitted" },
    { id: 6, title: "Turn Ideas into Interfaces", duration: "2hr", points: 50, status: "Not Submitted" },
  ]);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const filterCategories = ["Data Scince", "AI & Machine Learning", "Cybersecurity", "Cloud Computing"];

  return (
    <div className="  bg-gray-100">
      <div className="flex gap-8 p-8">
        <main className="flex-1 relative">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            {/* Filter Section */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold text-gray-700">Filter:</span>
              {filterCategories.map((cat, index) => (
                <button
                  key={cat}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                    index === 0
                      ? "bg-yellow-500 text-white"
                      : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Challenges Table */}
            <ChallengesTable challengesData={challenges} setSelectedChallenge={setSelectedChallenge} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
