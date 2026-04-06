import React from 'react'
import OrderCard from './OrderCard';
import { DUMMY_ORDERS } from "../../../data/cookerDummyData";

function NewOrdersColumn() {
    const orders = DUMMY_ORDERS.filter(o => o.status === "new");

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-slate-300">New Orders</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#38ada9]/15 text-[#38ada9]">
                    {orders.length}
                </span>
            </div>
            <div className="flex-1 overflow-y-auto pr-1">
                {orders.map(order => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>
        </div>
    )
}

export default NewOrdersColumn