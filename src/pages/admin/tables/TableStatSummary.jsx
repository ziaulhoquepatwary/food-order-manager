function TableStatSummary({ tables }) {
    const total     = tables.length;
    const available = tables.filter(t => t.status === "available").length;
    const occupied  = tables.filter(t => t.status === "occupied").length;
    const reserved  = tables.filter(t => t.status === "reserved").length;

    const stats = [
        { label: "Total Tables",  value: total,     color: "text-slate-100"  },
        { label: "Available",     value: available, color: "text-green-400"  },
        { label: "Occupied",      value: occupied,  color: "text-red-400"    },
        { label: "Reserved",      value: reserved,  color: "text-amber-400"  },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(stat => (
                <div
                    key={stat.label}
                    className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5"
                >
                    <p className="text-sm text-slate-200">{stat.label}</p>
                    <p className={`text-3xl font-semibold mt-2 ${stat.color}`}>
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default TableStatSummary;