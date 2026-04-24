import AnalyticsSummaryCards from "./AnalyticsSummaryCards";
import RevenueBarChart from "./RevenueBarChart";
import CategorySalesCard from "./CategorySalesCard";

function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
                <h1 className="text-xl font-semibold text-slate-100">Analytics</h1>
                <p className="text-sm text-slate-200 mt-1">
                    Sales and performance overview
                </p>
            </div>

            {/* Summary cards */}
            <AnalyticsSummaryCards />

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RevenueBarChart />
                </div>
                <div>
                    <CategorySalesCard />
                </div>
            </div>

        </div>
    );
}

export default AnalyticsPage;