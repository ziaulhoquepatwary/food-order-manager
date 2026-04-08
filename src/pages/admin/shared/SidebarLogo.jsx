import React from 'react'
import Logo from "../../../assets/cooking.png"

function SidebarLogo() {
    return (
        <div className="flex items-center gap-3 px-4 py-5 border-b border-[#38ada9]/15">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center text-lg shadow-lg shadow-[#079992]/20 shrink-0">
                <img src={Logo} alt="logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden md:block">
                <p className="text-sm font-semibold text-slate-100 leading-none">Cook Food</p>
                <p className="text-[10px] text-slate-200 tracking-widest uppercase mt-1">Admin Panel</p>
            </div>
        </div>
    )
}

export default SidebarLogo