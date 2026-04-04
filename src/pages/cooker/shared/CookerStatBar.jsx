const STATS = [
    { label: "New Orders", value: 4, color: "text-[#38ada9]" },
    { label: "In Progress", value: 2, color: "text-amber-400" },
    { label: "Done Today", value: 11, color: "text-green-400" },
    { label: "Active Cookers", value: 3, color: "text-slate-300" },
];

function StatItem({ label, value, color, showDivider }) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                    {label}
                </span>
                <span className={`text-xl font-semibold ${color}`}>
                    {value}
                </span>
            </div>
            {showDivider && (
                <div className="w-px h-8 bg-slate-700" />
            )}
        </div>
    );
}

function CookerStatBar() {
    return (
        <div className="bg-slate-900 border-b border-[#38ada9]/10 px-5 py-3 flex items-center gap-4">
            {STATS.map((stat, i) => (
                <StatItem
                    key={stat.label}
                    {...stat}
                    showDivider={i < STATS.length - 1}
                />
            ))}
        </div>
    );
}

export default CookerStatBar;