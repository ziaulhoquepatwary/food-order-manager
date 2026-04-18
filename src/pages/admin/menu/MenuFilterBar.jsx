function MenuFilterBar({ active, onChange }) {

    const CATEGORIES = ["all", "Fast Food", "Bengali", "Seafood", "BBQ", "Italian"];

    return (
        <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
                <button
                    key={cat}
                    type="button"
                    onClick={() => onChange(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200
                        ${active === cat
                            ? "bg-gradient-to-r from-[#079992] to-[#38ada9] text-white"
                            : "bg-slate-900 text-slate-200 border border-slate-700 hover:border-[#38ada9]/40 hover:text-slate-100"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

export default MenuFilterBar;