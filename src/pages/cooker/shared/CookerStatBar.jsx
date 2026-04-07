const STATS = [
    { label: "New Orders", value: 4, color: "text-[#38ada9]", dot: "bg-[#38ada9]" },
    { label: "In Progress", value: 2, color: "text-amber-400", dot: "bg-amber-400" },
    { label: "Done Today", value: 11, color: "text-green-400", dot: "bg-green-400" },
    { label: "Active Cookers", value: 3, color: "text-slate-300", dot: "bg-slate-400" },
];

function StatItem({ label, value, color, dot, showDivider }) {
    return (
        <div className="flex flex-1 items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${dot}`} />
                    <span className="text-[12px] text-slate-200 uppercase tracking-widest whitespace-nowrap">
                        {label}
                    </span>
                </div>
                <span className={`text-xl font-semibold ${color}`}>
                    {value}
                </span>
            </div>
            {showDivider && (
                <div className="w-px h-8 bg-slate-300 ml-3" />
            )}
        </div>
    );
}

function CookerStatBar() {
    return (
        <div className="bg-slate-900 border-b border-[#38ada9]/10 px-5 py-3">
            <div className="hidden sm:flex w-full">
                {STATS.map((stat, i) => (
                    <StatItem
                        key={stat.label}
                        {...stat}
                        showDivider={i < STATS.length - 1}
                    />
                ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:hidden">
                {STATS.map((stat, i) => (
                    <div key={stat.label} className="flex flex-col items-center gap-1 py-1">
                        <div className="flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${stat.dot}`} />
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                        <span className={`text-xl font-semibold ${stat.color}`}>
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CookerStatBar;