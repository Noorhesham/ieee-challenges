"use client";
import React, { useState } from "react";
import { Search, Filter, Eye, Download, Trash2 } from "lucide-react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

interface Submission {
  id: number;
  teamName: string;
  challengeName: string;
  time: string;
  points: string | number;
  status: "Judged" | "Not Judged";
  selected: boolean;
}

const initialSubmissions: Submission[] = [
  {
    id: 1,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 2,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Not Judged",
    selected: true,
  },
  {
    id: 3,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 4,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 5,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 6,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 7,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 8,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
  {
    id: 9,
    teamName: "Full Name",
    challengeName: "Challenge Name",
    time: "00:00",
    points: "--",
    status: "Judged",
    selected: false,
  },
];

const StatusPill: React.FC<{ status: "Judged" | "Not Judged" }> = ({ status }) => {
  const isJudged = status === "Judged";
  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${
        isJudged ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  );
};

const AdminSubmissionsPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setSubmissions(submissions.map((sub) => ({ ...sub, selected: checked })));
  };

  const handleSelectSingle = (id: number) => {
    const updatedSubmissions = submissions.map((sub) => (sub.id === id ? { ...sub, selected: !sub.selected } : sub));
    setSubmissions(updatedSubmissions);
    setSelectAll(updatedSubmissions.every((sub) => sub.selected));
  };

  return (
    <div className="font-sans bg-gray-50  ">
      <div className=" mx-auto px-4 py-2 mt-5 bg-white  rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
            <Filter size={18} />
            <span>Filter</span>
            <span className="bg-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 w-12">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-4 font-semibold text-gray-600">Team Name</th>
                <th className="p-4 font-semibold text-gray-600">Challenge</th>
                <th className="p-4 font-semibold text-gray-600">Time</th>
                <th className="p-4 font-semibold text-gray-600">Points</th>
                <th className="p-4 font-semibold text-gray-600">Status</th>
                <th className="p-4 font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr
                  key={sub.id}
                  className={`border-b border-gray-200 transition-colors ${
                    sub.selected ? "bg-yellow-50" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                      checked={sub.selected}
                      onChange={() => handleSelectSingle(sub.id)}
                    />
                  </td>
                  <td className="p-4 font-semibold text-gray-800">{sub.teamName}</td>
                  <td className="p-4 text-gray-600">{sub.challengeName}</td>
                  <td className="p-4 text-gray-600">{sub.time}</td>
                  <td className="p-4 font-bold text-gray-800">{sub.points}</td>
                  <td className="p-4">
                    <StatusPill status={sub.status} />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 text-gray-400">
                      <button className="hover:text-yellow-600">
                        <Eye size={20} />
                      </button>
                      <button className="hover:text-blue-600">
                        <Download size={20} />
                      </button>
                      <button className="hover:text-red-600">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-500">Showing 31 to 40 of 5,653 entries</p>
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
                  page === 2 ? "bg-yellow-500 text-white shadow" : "text-gray-600 hover:bg-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubmissionsPage;
