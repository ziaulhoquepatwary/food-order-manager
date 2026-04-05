import OrderCardHeader from "./OrderCardHeader";
import OrderCardItems from "./OrderCardItems";
import OrderCardNote from "./OrderCardNote";

const borderColor = {
    new: "border-l-[#38ada9]",
    inprogress: "border-l-amber-400",
    completed: "border-l-green-400",
};

function OrderCard({ order }) {
    const { status, tableNumber, arrivedAt, priority, items, note, elapsed } = order;

    return (
        <div className={`bg-slate-900 border border-[#38ada9]/15 border-l-2 ${borderColor[status]} rounded-xl p-4 mb-3`}>

            <OrderCardHeader
                tableNumber={tableNumber}
                arrivedAt={arrivedAt}
                priority={priority}
            />

            <div className="h-px bg-slate-700/50 mb-3" />

            <OrderCardItems items={items} status={status} />

            <OrderCardNote note={note} />

            {/* ── status ── */}
            {status === "new" && (
                <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white text-xs font-semibold hover:-translate-y-0.5 transition-all duration-200">
                    Accept Order
                </button>
            )}

            {status === "inprogress" && (
                <div>
                    <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-amber-400 text-xs">⏱</span>
                        <span className="text-amber-400 text-xs">{elapsed} elapsed</span>
                    </div>
                    <button className="w-full py-2 rounded-xl border border-green-400/30 bg-green-400/10 text-green-400 text-xs font-semibold hover:bg-green-400/20 transition-all duration-200">
                        Mark as Done
                    </button>
                </div>
            )}

            {status === "completed" && (
                <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm">✓</span>
                    <span className="text-green-400 text-xs">Delivered</span>
                </div>
            )}

        </div>
    );
}

export default OrderCard;