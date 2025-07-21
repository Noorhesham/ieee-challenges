"use client";
import { useState } from "react";
import FormInput from "../FormInput";
import { PlusCircle } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";

interface Criterion {
  id: number;
  name: string;
  points: string;
}

const CreateChallengeForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [totalPoints, setTotalPoints] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
  const [criteria, setCriteria] = useState<Criterion[]>([{ id: 1, name: "", points: "" }]);

  const handleCriterionChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCriteria((prevCriteria) => prevCriteria.map((c) => (c.id === id ? { ...c, [name]: value } : c)));
  };

  const addCriterion = () => {
    setCriteria((prev) => [...prev, { id: Date.now(), name: "", points: "" }]);
  };

  return (
    <div className=" w-full   flex items-center justify-center">
      <div className="w-full   rounded-2xl shadow-lg">
        <form className="space-y-6 px-8 py-4 w-full">
          <FormInput
            label="Title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormInput
            label="Description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Total Points"
              name="totalPoints"
              placeholder="Total points"
              value={totalPoints}
              onChange={(e) => setTotalPoints(e.target.value)}
            />
            <FormInput
              label="Expected Time"
              name="expectedTime"
              placeholder="Expected Time"
              value={expectedTime}
              onChange={(e) => setExpectedTime(e.target.value)}
            />
          </div>

          {/* Criteria Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-4">Criteria</h3>
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={criterion.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div className="md:col-span-2">
                    {index === 0 && <label className="block text-sm font-bold text-gray-700 mb-1.5">Criterion</label>}
                    <input
                      type="text"
                      name="name"
                      placeholder="Criterion"
                      value={criterion.name}
                      onChange={(e) => handleCriterionChange(criterion.id, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    {index === 0 && (
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Criterion Points</label>
                    )}
                    <input
                      type="text"
                      name="points"
                      placeholder="Criterion Points"
                      value={criterion.points}
                      onChange={(e) => handleCriterionChange(criterion.id, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addCriterion}
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-yellow-600 transition"
            >
              <PlusCircle size={16} />
              More Criterion
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end items-center gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-2.5 rounded-lg font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 rounded-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 transition shadow-sm"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChallengeForm;
