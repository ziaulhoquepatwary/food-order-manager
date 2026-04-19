function MenuItemCard({ item, onToggle }) {
    const isActive = item.status === "active";

    return (
        <div className={`bg-slate-900 rounded-2xl border transition-all duration-200 p-5 flex flex-col gap-4
            ${isActive ? "border-[#38ada9]/15" : "border-slate-700/50 opacity-60"}`}
        >
            {/* Top — emoji + status toggle */}
            <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl">
                    {item.image}
                </div>

                {/* Active / Inactive toggle */}
                <button
                    type="button"
                    onClick={() => onToggle(item.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200
                        ${isActive
                            ? "bg-green-400/10 text-green-400 border-green-400/20 hover:bg-red-400/10 hover:text-red-400 hover:border-red-400/20"
                            : "bg-red-400/10 text-red-400 border-red-400/20 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/20"
                        }`}
                >
                    {isActive ? "Active" : "Inactive"}
                </button>
            </div>

            {/* Info */}
            <div>
                <h3 className="text-base font-semibold text-slate-100">{item.name}</h3>
                <p className="text-sm text-slate-200 mt-0.5">{item.category}</p>
            </div>

            {/* Price + action buttons */}
            <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-semibold text-[#38ada9]">{item.price}</span>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="px-3 py-1.5 rounded-xl text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700 hover:border-[#38ada9]/40 hover:text-slate-100 transition-all duration-200"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="px-3 py-1.5 rounded-xl text-sm font-medium bg-red-500/8 text-red-400 border border-red-500/20 hover:bg-red-500/15 transition-all duration-200"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenuItemCard;