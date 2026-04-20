const FILTERS = ["all", "pending", "approved", "rejected"];

function CookerFilterBar({ active, onChange }) {
    return (
        <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map(filter => (
                <button
                    key={filter}
                    type="button"
                    onClick={() => onChange(filter)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200
                        ${active === filter
                            ? "bg-gradient-to-r from-[#079992] to-[#38ada9] text-white"
                            : "bg-slate-900 text-slate-200 border border-slate-700 hover:border-[#38ada9]/40 hover:text-slate-100"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default CookerFilterBar;