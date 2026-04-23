import { MONTHLY_SUMMARY } from "../../../data/adminDummyData";

function AnalyticsSummaryCards() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MONTHLY_SUMMARY.map(item => (
                <div
                    key={item.label}
                    className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5 flex flex-col gap-2"
                >
                    <p className="text-sm text-slate-200">{item.label}</p>
                    <p className={`text-2xl font-semibold ${item.color}`}>
                        {item.value}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default AnalyticsSummaryCards;