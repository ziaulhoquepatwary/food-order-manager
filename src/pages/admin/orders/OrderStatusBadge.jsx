const STATUS_STYLES = {
    pending: "bg-amber-400/12 text-amber-400 border border-amber-400/20",
    cooking: "bg-[#38ada9]/12 text-[#38ada9] border border-[#38ada9]/20",
    completed: "bg-green-400/12 text-green-400 border border-green-400/20",
    cancelled: "bg-red-400/12 text-red-400 border border-red-400/20",
};

function OrderStatusBadge({ status }) {
    return (
        <span className={`px-3 py-1 rounded-full text-sm capitalize ${STATUS_STYLES[status]}`}>
            {status}
        </span>
    );
}

export default OrderStatusBadge;