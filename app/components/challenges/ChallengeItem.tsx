import { Award, Clock, XCircle } from "lucide-react";
import { Challenge } from "../../types";

const ChallengeItem: React.FC<{ challenge: Challenge; onSelect: (challenge: Challenge) => void }> = ({
  challenge,
  onSelect,
}) => {
  return (
    <li className="flex items-center gap-4 border-b py-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full font-semibold text-gray-600">
        {challenge.id}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg text-gray-800">{challenge.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
          <span className="flex items-center gap-1">
            <Clock size={16} /> {challenge.duration}
          </span>
          <span className="flex items-center gap-1">
            <Award size={16} /> {challenge.points} Point
          </span>
          <span className="flex items-center gap-1 text-red-500 font-semibold">
            <XCircle size={16} /> {challenge.status}
          </span>
        </div>
      </div>
      <button
        onClick={() => onSelect(challenge)}
        className="flex-shrink-0 bg-[#F9A826] text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105 shadow-sm"
      >
        Details
      </button>
    </li>
  );
};

export default ChallengeItem;
