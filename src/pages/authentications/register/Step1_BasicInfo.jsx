import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaPhone, FaUser, FaGoogle } from "react-icons/fa";

function Step1_BasicInfo({ methods }) {

    const { register, formState: { errors }, watch } = methods;


    const passwordValue = watch("password");

    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);


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
                    <FaUser className="absolute left-4 text-[#38ada9] pointer-events-none" size={13} />
                    <input
                        type="text"
                        placeholder="e.g. Ziaul Hoque"
                        {...register("fullName", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Name must be at least 3 characters" },
                        })}
                        className={`w-full bg-slate-900 border rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#079992]/15
                      ${errors.fullName ? "border-red-500/50" : "border-[#38ada9]/20 focus:border-[#38ada9]/60"}`}
                    />
                </div>
                {/* Error message */}
                {errors.fullName && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.fullName.message}</p>
                )}
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
                        placeholder="chef@cookfood.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                        })}
                        className={`w-full bg-slate-900 border rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#079992]/15
                      ${errors.email ? "border-red-500/50" : "border-[#38ada9]/20 focus:border-[#38ada9]/60"}`}
                    />
                </div>
                {errors.email && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.email.message}</p>
                )}
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
                        placeholder="+880 1XXXXXXXXX"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[0-9+\s\-]{7,15}$/, message: "Enter a valid phone number" },
                        })}
                        className={`w-full bg-slate-900 border rounded-xl pl-11 pr-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#079992]/15
                      ${errors.phone ? "border-red-500/50" : "border-[#38ada9]/20 focus:border-[#38ada9]/60"}`}
                    />
                </div>
                {errors.phone && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.phone.message}</p>
                )}
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
                        placeholder="Min. 8 characters"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                        })}
                        className={`w-full bg-slate-900 border rounded-xl pl-11 pr-12 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#079992]/15
                      ${errors.password ? "border-red-500/50" : "border-[#38ada9]/20 focus:border-[#38ada9]/60"}`}
                    />
                    <button type="button" onClick={() => setShowPass(p => !p)}
                        className="absolute right-3 p-1.5 text-slate-500 hover:text-[#38ada9] transition-colors">
                        {showPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.password.message}</p>
                )}
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
                        placeholder="Re-enter your password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === passwordValue || "Passwords do not match",
                        })}
                        className={`w-full bg-slate-900 border rounded-xl pl-11 pr-12 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#079992]/15
                      ${errors.confirmPassword ? "border-red-500/50" : "border-[#38ada9]/20 focus:border-[#38ada9]/60"}`}
                    />
                    <button type="button" onClick={() => setShowConfirm(p => !p)}
                        className="absolute right-3 p-1.5 text-slate-500 hover:text-[#38ada9] transition-colors">
                        {showConfirm ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.confirmPassword.message}</p>
                )}
            </div>

            {/* ── Google Option ── */}
            <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-[#38ada9]/12" />
                <span className="text-xs text-slate-500 whitespace-nowrap">or continue with</span>
                <div className="flex-1 h-px bg-[#38ada9]/12" />
            </div>
            <button type="button"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[#38ada9]/20 bg-slate-900 text-slate-300 text-sm font-medium transition-all duration-200 hover:bg-[#38ada9]/8 hover:border-[#38ada9]/40 hover:-translate-y-0.5">
                <FaGoogle className="text-[#EA4335]" size={16} />
                <span>Continue with Google</span>
            </button>

        </div>
    )
}

export default Step1_BasicInfo