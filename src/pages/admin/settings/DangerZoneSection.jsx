import SettingsSection from "./SettingsSection";

function DangerZoneSection() {
    return (
        <SettingsSection
            title="Danger Zone"
            description="Irreversible actions — proceed with caution"
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                <div>
                    <p className="text-base font-medium text-slate-100">Clear All Orders</p>
                    <p className="text-sm text-slate-200 mt-0.5">
                        Permanently delete all order history
                    </p>
                </div>
                <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-red-400 border border-red-500/25 bg-red-500/8 hover:bg-red-500/15 transition-all duration-200 shrink-0"
                >
                    Clear Orders
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                <div>
                    <p className="text-base font-medium text-slate-100">Reset Menu</p>
                    <p className="text-sm text-slate-200 mt-0.5">
                        Remove all menu items permanently
                    </p>
                </div>
                <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-red-400 border border-red-500/25 bg-red-500/8 hover:bg-red-500/15 transition-all duration-200 shrink-0"
                >
                    Reset Menu
                </button>
            </div>
        </SettingsSection>
    );
}

export default DangerZoneSection;