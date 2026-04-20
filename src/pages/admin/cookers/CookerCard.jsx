import CookerStatusBadge from "./CookerStatusBadge";

function CookerCard({ cooker, onApprove, onReject }) {
    const isPending = cooker.status === "pending";

    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5 flex flex-col gap-4">

            {/* Top — avatar + status */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#079992]/15 border border-[#38ada9]/20 flex items-center justify-center text-base font-semibold text-[#38ada9] shrink-0">
                        {cooker.initials}
                    </div>
                    <div>
                        <p className="text-base font-semibold text-slate-100">{cooker.name}</p>
                        <p className="text-sm text-slate-200">{cooker.specialty}</p>
                    </div>
                </div>
                <CookerStatusBadge status={cooker.status} />
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 rounded-xl p-3">
                    <p className="text-sm text-slate-200">Level</p>
                    <p className="text-base font-medium text-slate-100 mt-0.5">{cooker.level}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-3">
                    <p className="text-sm text-slate-200">Joined</p>
                    <p className="text-base font-medium text-slate-100 mt-0.5">{cooker.joinedAt}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-3 col-span-2">
                    <p className="text-sm text-slate-200">Total Orders Completed</p>
                    <p className="text-xl font-semibold text-[#38ada9] mt-0.5">{cooker.orders}</p>
                </div>
            </div>

            {/* Action buttons — only for pending */}
            {isPending && (
                <div className="flex items-center gap-3 mt-auto">
                    <button
                        type="button"
                        onClick={() => onApprove(cooker.id)}
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#079992] to-[#38ada9] text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#079992]/30 transition-all duration-200"
                    >
                        Approve
                    </button>
                    <button
                        type="button"
                        onClick={() => onReject(cooker.id)}
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-red-500/8 text-red-400 border border-red-500/20 hover:bg-red-500/15 transition-all duration-200"
                    >
                        Reject
                    </button>
                </div>
            )}

        </div>
    );
}

export default CookerCard;