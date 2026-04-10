export const OVERVIEW_STATS = [
    {
        id: "orders",
        label: "Today's Orders",
        value: 48,
        sub: "+12 from yesterday",
        color: "text-[#38ada9]",
        subColor: "text-[#38ada9]/60",
    },
    {
        id: "revenue",
        label: "Revenue",
        value: "৳ 18,240",
        sub: "+৳ 2,400 from yesterday",
        color: "text-green-400",
        subColor: "text-green-400/60",
    },
    {
        id: "pending",
        label: "Pending Orders",
        value: 6,
        sub: "Needs attention",
        color: "text-amber-400",
        subColor: "text-amber-400/60",
    },
    {
        id: "cookers",
        label: "Active Cookers",
        value: "3 / 5",
        sub: "2 on break",
        color: "text-slate-100",
        subColor: "text-slate-200",
    },
];

export const RECENT_ORDERS = [
    { id: "ord-048", table: 7, items: "Beef Burger x2, Fries x2", status: "pending" },
    { id: "ord-047", table: 3, items: "Chicken Biryani x1", status: "cooking" },
    { id: "ord-046", table: 11, items: "Fish & Chips x3, Cola x3", status: "completed" },
    { id: "ord-045", table: 5, items: "Grilled Chicken x2", status: "completed" },
    { id: "ord-044", table: 9, items: "Pasta Carbonara x1", status: "cooking" },
];

export const PENDING_COOKERS = [
    { id: "c-001", name: "Ziaul Hoque", initials: "ZH", specialty: "Bengali Cuisine", level: "Senior" },
    { id: "c-002", name: "Mahbub Rahman", initials: "MR", specialty: "Fast Food", level: "Mid-level" },
    { id: "c-003", name: "Sakib Khan", initials: "SK", specialty: "BBQ & Grill", level: "Junior" },
];

export const TOP_ITEMS = [
    { name: "Beef Burger", sold: 24, percent: 80 },
    { name: "Chicken Biryani", sold: 18, percent: 60 },
    { name: "Fish & Chips", sold: 14, percent: 45 },
    { name: "BBQ Ribs", sold: 9, percent: 30 },
];