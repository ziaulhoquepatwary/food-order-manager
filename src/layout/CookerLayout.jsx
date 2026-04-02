import React from 'react'

function CookerLayout() {
    return (
        <div className="min-h-screen bg-slate-800 text-slate-200 font-sans">

            {/* ── Topbar ── */}
            <header className="bg-slate-900 border-b border-teal-500/20 h-14 px-5 flex items-center justify-between">

                {/* Left: Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center text-base">
                        🍽
                    </div>
                    <span className="text-sm font-medium text-slate-100">Cook Food — Kitchen</span>
                </div>

                {/* Right: Status + User + Logout */}
                <div className="flex items-center gap-4">

                    {/* Status badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-700/10 text-xs cursor-pointer">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Available
                    </div>

                    {/* User */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center text-xs font-medium text-white">
                            ZH
                        </div>
                        <span className="text-xs text-slate-400">Ziaul Hoque</span>
                    </div>

                    {/* Logout */}
                    <button className="px-3 py-1 rounded-lg border border-red-500/30 bg-red-500/8 text-red-400 text-xs cursor-pointer hover:bg-red-500/15 transition-colors">
                        Logout
                    </button>
                </div>
            </header>
        </div>
    )
}

export default CookerLayout