import React from 'react'

function StatCard({ label, value, sub, color, subColor }) {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5 flex flex-col gap-2">
            <p className="text-sm text-slate-200 uppercase tracking-wider">
                {label}
            </p>
            <p className={`text-3xl font-semibold ${color}`}>
                {value}
            </p>
            <p className={`text-sm ${subColor}`}>
                {sub}
            </p>
        </div>
    );
}

export default StatCard;