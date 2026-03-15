import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

function Login() {
    const [role, setRole] = useState("cooker");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full bg-slate-900 flex items-center justify-center px-2 py-10 relative overflow-hidden">

            {/* ── Background ambient orbs ── */}
            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#079992]/20 blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#38ada9]/10 blur-[80px] pointer-events-none animate-pulse" />

            {/* ── Decorative dot grid ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle, #38ada9 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* ── Card ── */}
            <div
                className="relative z-10 w-full max-w-md bg-slate-800 rounded-2xl border border-[#38ada9]/20 shadow-2xl shadow-black/50 px-4 py-10"
                style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
            >

                {/* ── Steam decoration ── */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                    {[0, 0.4, 0.8].map((delay, i) => (
                        <div
                            key={i}
                            className="w-1 h-5 rounded-full bg-gradient-to-t from-[#38ada9]/60 to-transparent"
                            style={{ animation: `floatSteam 2s ease-in-out ${delay}s infinite` }}
                        />
                    ))}
                </div>

                {/* ── Logo ── */}
                <div
                    className="flex flex-col items-center mb-8"
                    style={{ animation: "fadeSlideUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center text-3xl mb-4 shadow-lg shadow-[#079992]/30">
                        🍽️
                        {/* Pulse ring */}
                        <span className="absolute inset-[-5px] rounded-[22px] border-2 border-[#38ada9]/40 animate-ping" />
                    </div>
                    <h1
                        className="text-2xl font-bold text-slate-100 tracking-wide"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        COOK FOOD
                    </h1>
                    <p className="text-xs text-slate-500 tracking-[3px] uppercase mt-1">Staff Portal</p>
                </div>

                {/* ── Role Tabs ── */}
                <div
                    className="grid grid-cols-2 gap-1.5 bg-slate-900 rounded-xl p-1.5 mb-7"
                    style={{ animation: "fadeSlideUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    {[
                        { key: "cooker", label: "👨‍🍳 Cooker" },
                        { key: "admin", label: "🛡️ Admin" },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setRole(key)}
                            className={`py-2.5 rounded-[10px] text-sm font-medium transition-all duration-300 ${role === key
                                ? "bg-gradient-to-r from-[#079992] to-[#38ada9] text-white shadow-lg shadow-[#079992]/30"
                                : "text-slate-500 hover:text-slate-300"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* ── Email Field ── */}
                <div
                    className="mb-5"
                    style={{ animation: "fadeSlideUp 0.6s 0.25s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Email Address
                    </label>
                    <div className="relative flex items-center">
                        <MdEmail className="absolute left-4 text-[#38ada9] pointer-events-none" size={18} />
                        <input
                            type="email"
                            placeholder={role === "admin" ? "admin@saveur.com" : "chef@saveur.com"}
                            className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15"
                        />
                    </div>
                </div>

                {/* ── Password Field ── */}
                <div
                    className="mb-3"
                    style={{ animation: "fadeSlideUp 0.6s 0.32s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Password
                    </label>
                    <div className="relative flex items-center">
                        <RiLockPasswordLine className="absolute left-4 text-[#38ada9] pointer-events-none" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-11 pr-12 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15"
                        />
                        {/* Show / Hide toggle */}
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 p-1.5 rounded-lg text-slate-500 hover:text-[#38ada9] transition-colors duration-200"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
                        </button>
                    </div>
                </div>

                {/* ── Forgot Password ── */}
                <div
                    className="flex justify-end mb-6"
                    style={{ animation: "fadeSlideUp 0.6s 0.38s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    <a href="#" className="text-xs text-[#38ada9] hover:opacity-70 transition-opacity duration-200">
                        Forgot password?
                    </a>
                </div>

                {/* ── Login Button ── */}
                <button
                    type="button"
                    className="relative w-full py-3.5 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white font-semibold text-sm tracking-wide overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#079992]/40 active:translate-y-0 active:shadow-none"
                    style={{ animation: "fadeSlideUp 0.6s 0.42s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    {/* Shimmer sweep */}
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                        style={{ animation: "shimmer 2.5s linear infinite", backgroundSize: "200% auto" }}
                    />
                    <span className="relative">
                        {role === "admin" ? "🛡️ Sign in as Admin" : "👨‍🍳 Sign in as Cooker"}
                    </span>
                </button>

                {/* ── Divider ── */}
                <div
                    className="flex items-center gap-3 my-6"
                    style={{ animation: "fadeSlideUp 0.6s 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    <div className="flex-1 h-px bg-[#38ada9]/12" />
                    <span className="text-xs text-slate-500 whitespace-nowrap">or continue with</span>
                    <div className="flex-1 h-px bg-[#38ada9]/12" />
                </div>

                {/* ── Google Sign In ── */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[#38ada9]/20 bg-slate-900 text-slate-300 text-sm font-medium transition-all duration-200 hover:bg-[#38ada9]/8 hover:border-[#38ada9]/40 hover:-translate-y-0.5 active:translate-y-0"
                    style={{ animation: "fadeSlideUp 0.6s 0.55s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    <FaGoogle className="text-[#EA4335]" size={18} />
                    <span>Sign in with Google</span>
                </button>

                {/* ── Footer note ── */}
                <p
                    className="text-center mt-6 text-[11px] text-slate-600"
                    style={{ animation: "fadeSlideUp 0.6s 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
                >
                    Authorized personnel only &nbsp;·&nbsp; Cook Food © 2025
                </p>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        
                @keyframes fadeSlideUp {
                  from { opacity: 0; transform: translateY(28px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatSteam {
                  0%, 100% { transform: translateY(0) scaleX(1);       opacity: 0.6;  }
                  50%       { transform: translateY(-10px) scaleX(1.2); opacity: 0.15; }
                }
                @keyframes shimmer {
                  0%   { background-position: -200% center; }
                  100% { background-position:  200% center; }
                }
              `}</style>
        </div>
    )
}

export default Login