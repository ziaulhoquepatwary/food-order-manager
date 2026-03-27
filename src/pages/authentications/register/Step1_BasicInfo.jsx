import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaPhone, FaUser, FaGoogle } from "react-icons/fa";

function Step1_BasicInfo({ form, onChange }) {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const passwordMismatch = form.confirmPassword.length > 0 && form.password !== form.confirmPassword;

    return (
        <div>
            <h2 className="text-center text-base font-semibold text-slate-300 mb-5 tracking-wide">
                👤 Basic Information
            </h2>

            {/* ── Full Name ── */}
            <div className="mb-4">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Full Name
                </label>
                <div className="relative flex items-center">
                    <FaUser className="absolute left-4 text-[#38ada9] pointer-events-none" size={14} />
                    <input
                        type="text"
                        name="fullName"
                        placeholder="e.g. Rahul Ahmed"
                        value={form.fullName}
                        onChange={onChange}
                        className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15"
                    />
                </div>
            </div>

            {/* ── Email ── */}
            <div className="mb-4">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                </label>
                <div className="relative flex items-center">
                    <MdEmail className="absolute left-4 text-[#38ada9] pointer-events-none" size={16} />
                    <input
                        type="email"
                        name="email"
                        placeholder="chef@cookfood.com"
                        value={form.email}
                        onChange={onChange}
                        className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15"
                    />
                </div>
            </div>

            {/* ── Phone ── */}
            <div className="mb-4">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Phone Number
                </label>
                <div className="relative flex items-center">
                    <FaPhone className="absolute left-4 text-[#38ada9] pointer-events-none" size={13} />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+880 1XXXXXXXXX"
                        value={form.phone}
                        onChange={onChange}
                        className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15"
                    />
                </div>
            </div>

            {/* ── Password ── */}
            <div className="mb-4">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Password
                </label>
                <div className="relative flex items-center">
                    <RiLockPasswordLine className="absolute left-4 text-[#38ada9] pointer-events-none" size={16} />
                    <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        placeholder="Min. 8 characters"
                        value={form.password}
                        onChange={onChange}
                        className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-11 pr-12 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPass((p) => !p)}
                        className="absolute right-3 p-1.5 text-slate-500 hover:text-[#38ada9] transition-colors"
                    >
                        {showPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                    </button>
                </div>
            </div>

            {/* ── Confirm Password ── */}
            <div className="mb-2">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Confirm Password
                </label>
                <div className="relative flex items-center">
                    <RiLockPasswordLine className="absolute left-4 text-[#38ada9] pointer-events-none" size={16} />
                    <input
                        type={showConfirm ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Re-enter your password"
                        value={form.confirmPassword}
                        onChange={onChange}
                        className={`
                      w-full bg-slate-900 border rounded-xl pl-11 pr-12 py-3
                      text-slate-100 text-sm placeholder-slate-600 outline-none
                      transition-all duration-200 focus:ring-2 focus:ring-[#079992]/15
                      ${passwordMismatch ? "border-red-500/50 focus:border-red-500/70" : "border-[#38ada9]/20 focus:border-[#38ada9]/60" }
                    `}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm((p) => !p)}
                        className="absolute right-3 p-1.5 text-slate-500 hover:text-[#38ada9] transition-colors"
                    >
                        {showConfirm ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                    </button>
                </div>

                {/* error message */}
                {passwordMismatch && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">
                        ⚠ Passwords do not match
                    </p>
                )}
            </div>

            {/* ── Google Option ── */}
            <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-[#38ada9]/12" />
                <span className="text-xs text-slate-500 whitespace-nowrap">or continue with</span>
                <div className="flex-1 h-px bg-[#38ada9]/12" />
            </div>

            <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[#38ada9]/20 bg-slate-900 text-slate-300 text-sm font-medium transition-all duration-200 hover:bg-[#38ada9]/8 hover:border-[#38ada9]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
                <FaGoogle className="text-[#EA4335]" size={16} />
                <span>Continue with Google</span>
            </button>

        </div>
    )
}

export default Step1_BasicInfo