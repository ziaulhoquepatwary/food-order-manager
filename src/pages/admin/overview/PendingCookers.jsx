import { PENDING_COOKERS } from "../../../data/adminDummyData";

function PendingCookers() {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5">

            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-slate-100">Pending Applications</h2>
                <button
                    type="button"
                    className="text-sm text-[#38ada9] hover:opacity-70 transition-opacity"
                >
                    View all →
                </button>
            </div>

            <div className="flex flex-col gap-3">
                {PENDING_COOKERS.map(cooker => (
                    <div
                        key={cooker.id}
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-700/50 hover:border-[#38ada9]/20 transition-colors"
                    >
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-[#079992]/15 border border-[#38ada9]/20 flex items-center justify-center text-sm font-semibold text-[#38ada9] shrink-0">
                            {cooker.initials}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-base font-medium text-slate-100 truncate">{cooker.name}</p>
                            <p className="text-sm text-slate-200">{cooker.specialty} · {cooker.level}</p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                type="button"
                                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#079992]/12 text-[#38ada9] border border-[#38ada9]/25 hover:bg-[#079992]/20 transition-all duration-200"
                            >
                                Approve
                            </button>
                            <button
                                type="button"
                                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-red-500/8 text-red-400 border border-red-500/20 hover:bg-red-500/15 transition-all duration-200"
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default PendingCookers;