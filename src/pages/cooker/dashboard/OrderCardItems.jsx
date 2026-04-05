import React from 'react'

function OrderCardItems({ items, status }) {

    const qtyColor = {
        new: "text-[#38ada9] bg-[#38ada9]/10",
        inprogress: "text-amber-400 bg-amber-400/10",
        completed: "text-green-400 bg-green-400/10",
    };


    return (
        <div className="flex flex-col gap-1.5 mb-3">
            {items.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                    <span className="text-xs text-slate-300">{item.name}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${qtyColor[status]}`}>
                        x{item.qty}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default OrderCardItems