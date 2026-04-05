import React from 'react'

function OrderCardNote({ note }) {
    if (!note) return null;

    return (
        <p className="text-[11px] text-slate-500 italic mb-3">
            Note: {note}
        </p>
    )
}

export default OrderCardNote