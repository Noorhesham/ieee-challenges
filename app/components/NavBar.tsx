import React from "react";
import { Bell } from "lucide-react";
import Link from "next/link";

const LOGO_URL = "/ieee.svg";
const AVATAR_URL = "https://i.imgur.com/4hG3b2N.png";

const Nav = () => {
  return (
    <div className="font-sans flex justify-center p-4">
      <header className="bg-white w-full max-w-7xl rounded-full shadow-lg">
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex-shrink-0">
            <img src={LOGO_URL} alt="IEEE CS Mansoura Logo" className="h-14" />
          </div>

          <nav>
            <ul className="flex items-center gap-10 text-base font-semibold">
              <li>
                <Link href="/" className="text-[#F9A826]">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-gray-800 transition-colors hover:text-[#F9A826]">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-gray-800 transition-colors hover:text-[#F9A826]">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <button className="text-gray-600 transition-colors hover:text-gray-900">
              <Bell size={26} strokeWidth={2} />
            </button>
            <Link href="/team-profile" className="flex items-center gap-2">
              <img src={AVATAR_URL} alt="User Avatar" className="h-11 w-11 rounded-full object-cover" />
              <span className="text-base font-semibold text-gray-800">Name</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
