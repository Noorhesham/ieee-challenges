import TeamsTable from "@/app/components/admin/TeamsTable";


function Teams() {
    const filterCategories = ["Data Scince", "AI & Machine Learning", "Cybersecurity", "Cloud Computing"];
    return (
        <div className="bg-white rounded-2xl p-5 min-h-screen">
            <div className="flex items-center gap-4 mb-6">
                <span className="font-semibold text-gray-700">Filter:</span>
                {filterCategories.map((cat, index) => (
                    <button
                        key={cat}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${index === 0
                                ? "bg-yellow-500 text-white"
                                : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <TeamsTable/>
        </div>
    )
}

export default Teams