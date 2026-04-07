import React from 'react'

function OrderCardHeader({ tableNumber, arrivedAt, priority }) {
    return (
        <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-[#38ada9]">
                Table {tableNumber}
            </span>
            <div className="flex items-center gap-2">
                {priority && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
                        Urgent
                    </span>
                )}
                <span className="text-[11px] text-slate-200">{arrivedAt}</span>
            </div>
        </div>
    )
}

export default OrderCardHeader