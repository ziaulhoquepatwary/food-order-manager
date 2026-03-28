import { useState } from "react";
import { Controller } from "react-hook-form";
import { FaChevronDown, FaStar } from "react-icons/fa";

const SPECIALTIES = ["Bengali Cuisine", "Chinese Cuisine", "Fast Food", "Bakery & Pastry", "Italian Cuisine", "BBQ & Grill", "Seafood", "Vegetarian / Vegan"];

const EXPERIENCE_LEVELS = [
    { value: "junior", label: "Junior Cook", stars: 1 },
    { value: "mid", label: "Mid-level Cook", stars: 2 },
    { value: "senior", label: "Senior Cook", stars: 3 },
];

function Step2_Professional({ methods }) {
    const { register, control, formState: { errors } } = methods;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            <h2 className="text-center text-base font-semibold text-slate-300 mb-5 tracking-wide">
                👨‍🍳 Professional Details
            </h2>

            <div className="mb-5">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Experience Level
                </label>

                <Controller
                    name="experienceLevel"
                    control={control}
                    rules={{ required: "Please select your experience level" }}
                    render={({ field }) => (
                        <div className="grid grid-cols-3 gap-2">
                            {EXPERIENCE_LEVELS.map(({ value, label, stars }) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => field.onChange(value)}
                                    className={`flex flex-col items-center py-3 px-2 rounded-xl border text-xs font-medium transition-all duration-300 ${field.value === value
                                        ? "bg-gradient-to-b from-[#079992]/20 to-[#38ada9]/10 border-[#38ada9]/60 text-[#38ada9]"
                                        : "bg-slate-900 border-slate-700 text-slate-500 hover:border-[#38ada9]/30 hover:text-slate-400"
                                        }`}
                                >
                                    <div className="flex gap-0.5 mb-1.5">
                                        {Array.from({ length: 3 }).map((_, i) => (
                                            <FaStar key={i} size={9} className={i < stars ? "text-amber-400" : "text-slate-700"} />
                                        ))}
                                    </div>
                                    <span className="text-center leading-tight">{label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                />
                {errors.experienceLevel && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.experienceLevel.message}</p>
                )}
            </div>

            <div className="mb-5 relative">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Specialty / Cuisine Type
                </label>

                <Controller
                    name="specialty"
                    control={control}
                    rules={{ required: "Please select your specialty" }}
                    render={({ field }) => (
                        <div className="relative">
                            {/* Dropdown trigger */}
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(p => !p)}
                                className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl pl-4 pr-10 py-3 text-sm text-left outline-none transition-all duration-200 hover:border-[#38ada9]/40 relative"
                            >
                                <span className={field.value ? "text-slate-100" : "text-slate-600"}>
                                    {field.value || "Select your specialty…"}
                                </span>
                                <FaChevronDown
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#38ada9] transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                                    size={11}
                                />
                            </button>

                            {/* Dropdown list */}
                            {dropdownOpen && (
                                <div className="absolute z-30 mt-1.5 w-full bg-slate-800 border border-[#38ada9]/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                                    {SPECIALTIES.map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => {
                                                field.onChange(s);
                                                setDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150
                                ${field.value === s ? "bg-[#38ada9]/15 text-[#38ada9]" : "text-slate-300 hover:bg-slate-700"}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                />
                {errors.specialty && (
                    <p className="text-red-400 text-[11px] mt-1.5 pl-1">⚠ {errors.specialty.message}</p>
                )}
            </div>

            <div className="mb-5">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Years of Experience
                </label>

                <Controller
                    name="yearsExp"
                    control={control}
                    render={({ field }) => (
                        <div className="flex items-center gap-3 bg-slate-900 border border-[#38ada9]/20 rounded-xl px-4 py-3">
                            <button
                                type="button"
                                onClick={() => field.onChange(Math.max(0, field.value - 1))}
                                className="w-7 h-7 rounded-lg bg-slate-700 text-slate-300 hover:bg-[#38ada9]/20 hover:text-[#38ada9] font-bold transition-colors flex items-center justify-center text-lg"
                            >−</button>

                            <span className="flex-1 text-center text-slate-100 font-semibold text-base">
                                {field.value} {field.value === 1 ? "year" : "years"}
                            </span>

                            <button
                                type="button"
                                onClick={() => field.onChange(Math.min(40, field.value + 1))}
                                className="w-7 h-7 rounded-lg bg-slate-700 text-slate-300 hover:bg-[#38ada9]/20 hover:text-[#38ada9] font-bold transition-colors flex items-center justify-center text-lg"
                            >+</button>
                        </div>
                    )}
                />
            </div>

            <div className="mb-2">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Short Bio / Application Note
                    <span className="ml-1 text-slate-600 normal-case font-normal">(optional)</span>
                </label>
                <textarea
                    rows={3}
                    placeholder="Tell the admin why you want to join Cook Food…"
                    {...register("bio")}
                    className="w-full bg-slate-900 border border-[#38ada9]/20 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:border-[#38ada9]/60 focus:ring-2 focus:ring-[#079992]/15 resize-none"
                />
            </div>

        </div>
    )
}

export default Step2_Professional