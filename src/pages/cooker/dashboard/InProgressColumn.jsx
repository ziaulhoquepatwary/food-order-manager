import React from 'react'
import { DUMMY_ORDERS } from "../../../data/cookerDummyData";
import OrderCard from './OrderCard';


function InProgressColumn() {
    const orders = DUMMY_ORDERS.filter(o => o.status === "inprogress");

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-slate-300">In Progress</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-400">
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

export default InProgressColumn