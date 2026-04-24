function SettingsInputRow({ label, type = "text", defaultValue, placeholder }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="text-base text-slate-200 sm:w-40 shrink-0">
                {label}
            </label>
            <input
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-base text-slate-100 placeholder-slate-500 outline-none focus:border-[#38ada9]/50 focus:ring-2 focus:ring-[#38ada9]/10 transition-all duration-200"
            />
        </div>
    );
}

export default SettingsInputRow;