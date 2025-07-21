const AdminNav: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <img src="/ieee.svg" alt="Logo" className="h-12" />
          <h1 className="text-2xl font-bold text-gray-800">Challenges</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <span className="font-semibold text-gray-700">Name</span>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
