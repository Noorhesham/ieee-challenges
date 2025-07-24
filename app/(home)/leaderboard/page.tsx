import LeaderboardPage from "@/app/components/Leaderboard";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

const Leaderboard=()=> {
  return (
    <MaxWidthWrapper className="  min-h-screen ">
      <LeaderboardPage/>
    </MaxWidthWrapper>
  );
};

export default Leaderboard;
