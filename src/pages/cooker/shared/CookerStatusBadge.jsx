import { useState } from "react";

const STATUSES = [
    { value: "available", label: "Available", color: "text-[#38ada9]", dot: "bg-[#38ada9]" },
    { value: "busy", label: "Busy", color: "text-amber-400", dot: "bg-amber-400" },
    { value: "break", label: "On Break", color: "text-slate-400", dot: "bg-slate-500" },
];

function CookerStatusBadge() {
    const [current, setCurrent] = useState("available");
    const [open, setOpen] = useState(false);

    const active = STATUSES.find(s => s.value === current);

    return (
        <div className="relative">

            {/* ── present status button ── */}
            <button
                type="button"
                onClick={() => setOpen(p => !p)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#38ada9]/20 bg-slate-800 hover:border-[#38ada9]/40 transition-all duration-200"
            >
                <span className={`w-2 h-2 rounded-full ${active.dot}`} />
                <span className={`font-medium ${active.color}`}>{active.label}</span>
                <span className="text-gray-500 text-[20px]">▾</span>
            </button>

            {/* ── dropdown ── */}
            {open && (
                <div className="absolute top-9 left-0 z-50 bg-slate-800 border border-[#38ada9]/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden w-36 ">
                    {STATUSES.map(s => (
                        <button
                            key={s.value}
                            type="button"
                            onClick={() => { setCurrent(s.value); setOpen(false); }}
                            className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs transition-colors duration-150 cursor-pointer hover:bg-slate-700
                                ${current === s.value ? "bg-slate-700/60" : ""}`}
                        >
                            <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                            <span className={s.color}>{s.label}</span>
                        </button>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CookerStatusBadge;