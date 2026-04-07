import { useState } from "react";
import Logo from "../shared/Logo";
import CookerLogoutBtn from "./shared/CookerLogoutBtn";
import CookerProfile from "./shared/CookerProfile";
import CookerStatusBadge from "./shared/CookerStatusBadge";

function CookerTopbar({ cookerName, onLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-slate-900 border-b border-[#38ada9]/15 px-5 py-3">

            {/* ── Main row ── */}
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className="text-center">
                    <Logo />
                    <p className="text-[12px] text-slate-300 tracking-widest uppercase mt-0.5">
                        Kitchen
                    </p>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-4">
                    <CookerStatusBadge />
                    <div className="w-px h-5 bg-slate-700" />
                    <CookerProfile name={cookerName} />
                    <div className="w-px h-5 bg-slate-700" />
                    <CookerLogoutBtn onLogout={onLogout} />
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(p => !p)}
                    className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-800 transition"
                >
                    <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 pb-2 border-t border-slate-700 pt-4">
                    <CookerProfile name={cookerName} />
                    <CookerStatusBadge />
                    <CookerLogoutBtn onLogout={onLogout} />
                </div>
            )}

        </header>
    );
}

export default CookerTopbar;