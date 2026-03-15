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

                    {/* form */}

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