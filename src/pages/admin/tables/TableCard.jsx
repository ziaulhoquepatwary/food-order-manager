import TableStatusBadge from "./TableStatusBadge";

const STATUS_BORDER = {
    available: "border-green-400/20",
    occupied: "border-red-400/20",
    reserved: "border-amber-400/20",
};

const STATUS_BG = {
    available: "bg-green-400/5",
    occupied: "bg-red-400/5",
    reserved: "bg-amber-400/5",
};

const CAPACITY_ICON = {
    2: "👥",
    4: "👨‍👩‍👧‍👦",
    6: "🪑",
    8: "🏠",
};

function TableCard({ table, onStatusChange }) {
    const nextStatus = {
        available: "occupied",
        occupied: "available",
        reserved: "available",
    };

    return (
        <div className={`rounded-2xl border p-5 flex flex-col gap-4 transition-all duration-200
            ${STATUS_BORDER[table.status]} ${STATUS_BG[table.status]}`}
        >
            {/* Top — table number + status */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-slate-200">Table</p>
                    <p className="text-3xl font-semibold text-slate-100">
                        {String(table.number).padStart(2, "0")}
                    </p>
                </div>
                <TableStatusBadge status={table.status} />
            </div>

            {/* Capacity */}
            <div className="flex items-center gap-2">
                <span className="text-base">
                    {CAPACITY_ICON[table.capacity] ?? "🪑"}
                </span>
                <span className="text-sm text-slate-200">
                    {table.capacity} seats
                </span>
            </div>

            {/* Toggle status button */}
            <button
                type="button"
                onClick={() => onStatusChange(table.id, nextStatus[table.status])}
                className="w-full py-2 rounded-xl text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700 hover:border-[#38ada9]/40 hover:text-slate-100 transition-all duration-200"
            >
                Mark as {nextStatus[table.status]}
            </button>
        </div>
    );
}

export default TableCard;