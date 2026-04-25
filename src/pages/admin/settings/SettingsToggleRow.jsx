import { useState } from "react";

function SettingsToggleRow({ label, description, defaultOn }) {
    const [on, setOn] = useState(defaultOn);

    return (
        <div className="flex items-center justify-between gap-4">
            <div>
                <p className="text-base text-slate-100">{label}</p>
                <p className="text-sm text-slate-200 mt-0.5">{description}</p>
            </div>

            {/* Toggle switch */}
            <button
                type="button"
                onClick={() => setOn(p => !p)}
                className={`relative w-12 h-6 rounded-full border transition-all duration-300 shrink-0
                    ${on
                        ? "bg-[#079992]/30 border-[#38ada9]/40"
                        : "bg-slate-700 border-slate-600"
                    }`}
            >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300
                    ${on
                        ? "left-6 bg-[#38ada9]"
                        : "left-0.5 bg-slate-400"
                    }`}
                />
            </button>
        </div>
    );
}

export default SettingsToggleRow;