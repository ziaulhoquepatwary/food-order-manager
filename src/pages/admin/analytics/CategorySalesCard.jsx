import { CATEGORY_SALES } from "../../../data/adminDummyData";

function CategorySalesCard() {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5">

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-100">Sales by Category</h2>
                <p className="text-sm text-slate-200 mt-1">Total items sold this week</p>
            </div>

            <div className="flex flex-col gap-4">
                {CATEGORY_SALES.map(item => (
                    <div key={item.category}>

                        {/* Label row */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-base text-slate-100">{item.category}</span>
                            <span className="text-base font-semibold text-[#38ada9]">
                                {item.sold} sold
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#079992] to-[#38ada9] rounded-full transition-all duration-700"
                                style={{ width: `${item.percent}%` }}
                            />
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default CategorySalesCard;