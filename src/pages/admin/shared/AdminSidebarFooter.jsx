import React from 'react'

function AdminSidebarFooter({ onLogout }) {
    return (
        <div className="px-3 py-4 border-t border-[#38ada9]/15 flex items-center gap-3">

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center text-sm font-semibold text-white shrink-0">
                AD
            </div>

            <div className="hidden md:block flex-1 min-w-0">
                <p className="text-base font-medium text-slate-100 leading-none truncate">
                    Admin
                </p>
                <p className="text-sm text-slate-200 mt-1">
                    Super Admin
                </p>
            </div>

            {/* Logout — Icon only on mobile */}
            <button
                type="button"
                onClick={onLogout}
                className="shrink-0 px-3 py-1.5 rounded-xl border border-red-500/20 bg-red-500/8 text-red-400 text-sm font-medium hover:bg-red-500/15 hover:border-red-500/35 transition-all duration-200"
            >
                <span className="hidden md:inline">Logout</span>
                <span className="md:hidden">⏻</span>
            </button>

        </div>
    )
}

export default AdminSidebarFooter