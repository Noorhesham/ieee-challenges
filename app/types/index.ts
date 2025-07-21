interface Category {
  name: string;
  icon: React.ReactNode;
}

interface CategoriesProps {
  categories: Category[];
}
interface Challenge {
  id: number;
  title: string;
  duration: string;
  points: number;
  status: "Not Submitted" | "Submitted";
  description?: string;
  criteria?: { text: string; points: number }[];
}
interface TeamMember {
  name: string;
  email: string;
}

interface SolvedChallenge {
  title: string;
  link: string;
}

interface TeamProfile {
  avatarUrl: string;
  name: string;
  category: string;
  rank: number;
  solvedCount: number;
  totalChallenges: number;
  points: number;
  members: TeamMember[];
  solvedChallenges: SolvedChallenge[];
}
interface LeaderboardEntry {
  rank: number;
  teamName: string;
  points: number;
  totalPoints: number;
  submissions: number;
}

export type { Category, CategoriesProps, Challenge, TeamProfile, LeaderboardEntry };
