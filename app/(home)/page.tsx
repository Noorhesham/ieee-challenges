import { DataScienceIcon, AiMlIcon, CybersecurityIcon, CloudComputingIcon } from "./components/Icons";
import Categories from "./components/Categories";
import { Category } from "./types";
import Timer from "./components/Timer";

const challengeCategories: Category[] = [
  { name: "Data Science", icon: <DataScienceIcon /> },
  { name: "AI & Machine Learning", icon: <AiMlIcon /> },
  { name: "Cybersecurity", icon: <CybersecurityIcon /> },
  { name: "Cloud Computing", icon: <CloudComputingIcon /> },
];
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center min-h-screen bg-white">
      <Timer />
      <Categories categories={challengeCategories} />
    </main>
  );
}
