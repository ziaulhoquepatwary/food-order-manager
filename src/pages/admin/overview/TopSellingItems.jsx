import { TOP_ITEMS } from "../../../data/adminDummyData";

function TopSellingItems() {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5">

            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-slate-100">Top Selling Items Today</h2>
                <button
                    type="button"
                    className="text-sm text-[#38ada9] hover:opacity-70 transition-opacity"
                >
                    View analytics →
                </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {TOP_ITEMS.map(item => (
                    <div
                        key={item.name}
                        className="bg-slate-800 rounded-xl p-4 flex flex-col gap-3"
                    >
                        <p className="text-sm text-slate-200">{item.name}</p>
                        <p className="text-2xl font-semibold text-[#38ada9]">{item.sold}x</p>

                        {/* Progress bar */}
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#079992] to-[#38ada9] rounded-full transition-all duration-500"
                                style={{ width: `${item.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default TopSellingItems;