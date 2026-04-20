const STATUS_STYLES = {
    approved: "bg-green-400/10 text-green-400 border border-green-400/20",
    pending: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
    rejected: "bg-red-400/10  text-red-400  border border-red-400/20",
};

function CookerStatusBadge({ status }) {
    return (
        <span className={`px-3 py-1 rounded-full text-sm capitalize ${STATUS_STYLES[status]}`}>
            {status}
        </span>
    );
}

export default CookerStatusBadge;