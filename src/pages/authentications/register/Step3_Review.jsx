import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

const LEVEL_LABELS = {
    junior: "Junior Cook",
    mid: "Mid-level Cook",
    senior: "Senior Cook",
};

function Step3_Review({ methods }) {
    const { control, getValues } = methods;

    const [photoPreview, setPhotoPreview] = useState(null);
    const fileInputRef = useRef();

    const data = getValues();

    return (
        <div>
            <h2 className="text-center text-base font-semibold text-slate-300 mb-5 tracking-wide">
                📋 Review & Submit
            </h2>

            {/* Profile Photo */}
            <div className="flex flex-col items-center mb-6">

                <Controller
                    name="photoFile"
                    control={control}
                    render={({ field }) => (
                        <>
                            {/* Photo box */}
                            <div
                                className="relative w-24 h-24 rounded-2xl bg-slate-700 border-2 border-dashed border-[#38ada9]/40 flex items-center justify-center cursor-pointer hover:border-[#38ada9]/70 transition-colors overflow-hidden group"
                                onClick={() => fileInputRef.current.click()}
                            >
                                {photoPreview ? (
                                    <>
                                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <FaCamera className="text-white" size={20} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-1 text-slate-500 group-hover:text-[#38ada9] transition-colors">
                                        <FaCamera size={22} />
                                        <span className="text-[10px] font-medium tracking-wide">Upload Photo</span>
                                    </div>
                                )}
                            </div>

                            {/* Hidden file input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;
                                    field.onChange(file);
                                    setPhotoPreview(URL.createObjectURL(file));
                                }}
                            />
                        </>
                    )}
                />

                <p className="text-[11px] text-slate-600 mt-2">Optional — helps admin identify you</p>
            </div>

            {/* Application Summary Card  */}
            <div className="bg-slate-900 border border-[#38ada9]/15 rounded-2xl p-4 space-y-2.5">
                <p className="text-[10px] font-bold text-[#38ada9] uppercase tracking-widest mb-3">
                    Application Summary
                </p>

                {[
                    { icon: "👤", label: "Name", value: data.fullName },
                    { icon: "📧", label: "Email", value: data.email },
                    { icon: "📱", label: "Phone", value: data.phone },
                    { icon: "⭐", label: "Level", value: LEVEL_LABELS[data.experienceLevel] },
                    { icon: "🍽️", label: "Specialty", value: data.specialty },
                    { icon: "📅", label: "Experience", value: `${data.yearsExp || 0} years` },
                ].map(({ icon, label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-2">
                        <span className="text-slate-500 text-xs whitespace-nowrap">{icon} {label}</span>
                        <span className="text-slate-300 text-xs text-right">{value || "—"}</span>
                    </div>
                ))}
            </div>

            {/* ── Approval Pending Warning ── */}
            <div className="mt-4 flex gap-3 bg-amber-500/8 border border-amber-500/20 rounded-xl p-3">
                <span className="text-lg shrink-0">⏳</span>
                <p className="text-[11px] text-amber-400/80 leading-relaxed">
                    After submitting, your application will be sent to the Admin for review.
                    You'll be notified once approved.
                </p>
            </div>

        </div>
    )
}

export default Step3_Review