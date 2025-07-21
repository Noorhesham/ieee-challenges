import { Challenge } from "../../types";
import { ArrowLeft, Award, XCircle } from "lucide-react";
import { Clock } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ChallengesTable from "./ChallengaesTable";
import Button from "../Button";

const ChallengeDetails: React.FC<{ challenge: Challenge; onBack: () => void }> = ({ challenge, onBack }) => {
  return (
    <MaxWidthWrapper className="mx-auto bg-white p-8 rounded-2xl shadow-md">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 font-semibold mb-6 hover:text-gray-900">
        <ArrowLeft size={20} />
        Back to Challenges
      </button>

      {/* Challenge Header */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">{challenge.title}</h2>
        <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1.5">
            <Clock size={16} /> {challenge.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Award size={16} /> {challenge.points} Point
          </span>
          <span className="flex items-center gap-1.5 text-red-500 font-semibold">
            <XCircle size={16} /> {challenge.status}
          </span>
        </div>
        <p className="text-gray-600 mt-4 leading-relaxed">{challenge.description}</p>
      </div>

      {/* Criteria Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
        <h3 className="text-xl font-bold text-gray-800">Criteria</h3>
        <p className="text-sm text-gray-500 mt-1">Projects will be judged based on:</p>
        <ChallengesTable challengesData={challenge.criteria || []} setSelectedChallenge={() => {}} />
      </div>

      <div className="mt-8 flex items-center gap-4">
        <input
          type="text"
          placeholder="https://github.com/user/repo/blob/main/file.md"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9A826] focus:border-transparent outline-none transition"
        />
        <Button>Submit</Button>
      </div>
    </MaxWidthWrapper>
  );
};
export default ChallengeDetails;
