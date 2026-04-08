import React from 'react'
import { NavLink } from "react-router-dom";

function SidebarNavItem({ to, icon, label, badge }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
                ${isActive
                    ? "bg-[#079992]/15 text-[#38ada9]"
                    : "text-slate-200 hover:bg-slate-700/50 hover:text-slate-100"
                }`
            }
        >
            <span className="text-base shrink-0">{icon}</span>

            {/* mobile label hide */}
            <span className="hidden md:block flex-1">{label}</span>

            {badge && (
                <span className="hidden md:flex text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/20">
                    {badge}
                </span>
            )}
        </NavLink>
    )
}

export default SidebarNavItem