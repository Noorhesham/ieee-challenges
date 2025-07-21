import { LayoutDashboard, Users, Trophy, FileText } from "lucide-react";

const AdminSidebar: React.FC = () => {
  const menuItems = [
    { name: "Challenges", icon: <LayoutDashboard size={20} />, active: true },
    { name: "Teams", icon: <Users size={20} />, active: false },
    { name: "Leader board", icon: <Trophy size={20} />, active: false },
    { name: "Submission", icon: <FileText size={20} />, active: false },
  ];

  return (
    <aside className="w-64 bg-white p-4 rounded-2xl shadow-lg">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${
                  item.active ? "bg-yellow-100 text-yellow-700" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
