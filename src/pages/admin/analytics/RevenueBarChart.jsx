import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from "recharts";
import { WEEKLY_REVENUE } from "../../../data/adminDummyData";

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;

    return (
        <div className="bg-slate-800 border border-[#38ada9]/20 rounded-xl px-4 py-3">
            <p className="text-sm text-slate-200 mb-1">{label}</p>
            <p className="text-base font-semibold text-[#38ada9]">
                ৳ {payload[0].value.toLocaleString()}
            </p>
            <p className="text-sm text-slate-200">
                {payload[1]?.value} orders
            </p>
        </div>
    );
}

function RevenueBarChart() {
    return (
        <div className="bg-slate-900 rounded-2xl border border-[#38ada9]/15 p-5">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-slate-100">Weekly Revenue</h2>
                    <p className="text-sm text-slate-200 mt-1">This week's performance</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#38ada9]" />
                        <span className="text-sm text-slate-200">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="text-sm text-slate-200">Orders</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
                <BarChart
                    data={WEEKLY_REVENUE}
                    margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
                    barGap={4}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(56,173,169,0.08)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="day"
                        tick={{ fill: "#94a3b8", fontSize: 13 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={v => `৳${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(56,173,169,0.06)" }} />
                    <Bar dataKey="revenue" fill="#38ada9" radius={[6, 6, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="orders" fill="#f59e0b" radius={[6, 6, 0, 0]} maxBarSize={40} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default RevenueBarChart;