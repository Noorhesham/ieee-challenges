"use client";
import { LayoutDashboard, Users, Trophy, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const menuItems = [
    { name: "Challenges", icon: <LayoutDashboard size={20} />, active: true, link: '/admin' },
    { name: "Teams", icon: <Users size={20} />, active: false, link: '/admin/teams' },
    { name: "Leader board", icon: <Trophy size={20} />, active: false, link: '/admin/leaderboard' },
    { name: "Submission", icon: <FileText size={20} />, active: false, link: '/admin/submission' },
  ];
  return (
    <aside className="w-64 bg-white p-4 rounded-2xl shadow-lg mt-5">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive =pathname === item.link;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${isActive ? "bg-yellow-100 text-yellow-700" : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {item.icon}
                  <span className="capitalize">{item.name}</span>
                </Link>
              </li>
            )

          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
