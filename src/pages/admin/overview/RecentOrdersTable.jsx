import { RECENT_ORDERS } from "../../../data/adminDummyData";

const STATUS_STYLES = {
    pending: "bg-amber-400/12 text-amber-400 border border-amber-400/20",
    cooking: "bg-[#38ada9]/12 text-[#38ada9] border border-[#38ada9]/20",
    completed: "bg-green-400/12 text-green-400 border border-green-400/20",
};

function RecentOrdersTable() {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5">

            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-slate-100">Recent Orders</h2>
                <button
                    type="button"
                    className="text-sm text-[#38ada9] hover:opacity-70 transition-opacity"
                >
                    View all →
                </button>
            </div>

            {/* Table — mobile scroll */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-700">
                            <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Order ID</th>
                            <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Table</th>
                            <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Items</th>
                            <th className="text-left text-sm text-slate-200 font-medium pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RECENT_ORDERS.map(order => (
                            <tr
                                key={order.id}
                                className="border-b border-slate-800 last:border-none hover:bg-slate-800/50 transition-colors"
                            >
                                <td className="py-3 pr-4 text-base text-[#38ada9]">#{order.id}</td>
                                <td className="py-3 pr-4 text-base text-slate-100">Table {order.table}</td>
                                <td className="py-3 pr-4 text-base text-slate-200 max-w-[200px] truncate">{order.items}</td>
                                <td className="py-3">
                                    <span className={`text-sm px-3 py-1 rounded-full capitalize ${STATUS_STYLES[order.status]}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default RecentOrdersTable;