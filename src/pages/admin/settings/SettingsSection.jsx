function SettingsSection({ title, description, children }) {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5 flex flex-col gap-5">
            <div className="border-b border-slate-700/50 pb-4">
                <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
                <p className="text-sm text-slate-200 mt-1">{description}</p>
            </div>
            {children}
        </div>
    );
}

export default SettingsSection;