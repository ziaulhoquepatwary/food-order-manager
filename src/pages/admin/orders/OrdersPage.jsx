import { useState } from "react";
import { ALL_ORDERS } from "../../../data/adminDummyData";
import OrdersFilterBar from "./OrdersFilterBar";
import OrdersTable from "./OrdersTable";

function OrdersPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = activeFilter === "all"
        ? ALL_ORDERS
        : ALL_ORDERS.filter(o => o.status === activeFilter);

    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-semibold text-slate-100">All Orders</h1>
                    <p className="text-sm text-slate-200 mt-1">
                        {filtered.length} order{filtered.length !== 1 ? "s" : ""} found
                    </p>
                </div>
            </div>

            {/* Filter bar */}
            <OrdersFilterBar
                active={activeFilter}
                onChange={setActiveFilter}
            />

            {/* Table */}
            <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5">
                <OrdersTable orders={filtered} />
            </div>

        </div>
    );
}

export default OrdersPage;