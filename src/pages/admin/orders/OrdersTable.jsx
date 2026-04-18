import OrderStatusBadge from "./OrderStatusBadge";

function OrdersTable({ orders }) {

    if (orders.length === 0) {
        return (
            <div className="text-center py-16 text-slate-200 text-base">
                No orders found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-700">
                        <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Order ID</th>
                        <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Table</th>
                        <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Items</th>
                        <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Total</th>
                        <th className="text-left text-sm text-slate-200 font-medium pb-3 pr-4">Time</th>
                        <th className="text-left text-sm text-slate-200 font-medium pb-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr
                            key={order.id}
                            className="border-b border-slate-800 last:border-none hover:bg-slate-800/40 transition-colors"
                        >
                            <td className="py-4 pr-4 text-base text-[#38ada9]">#{order.id}</td>
                            <td className="py-4 pr-4 text-base text-slate-100">Table {order.table}</td>
                            <td className="py-4 pr-4 text-base text-slate-200 max-w-[220px] truncate">{order.items}</td>
                            <td className="py-4 pr-4 text-base text-slate-100">{order.total}</td>
                            <td className="py-4 pr-4 text-base text-slate-200">{order.time}</td>
                            <td className="py-4">
                                <OrderStatusBadge status={order.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersTable;