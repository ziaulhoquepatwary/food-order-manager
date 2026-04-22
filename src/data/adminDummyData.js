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

export const ALL_ORDERS = [
    { id: "ord-048", table: 7, items: "Beef Burger x2, Fries x2", status: "pending", time: "2m ago", total: "৳ 480" },
    { id: "ord-047", table: 3, items: "Chicken Biryani x1", status: "cooking", time: "5m ago", total: "৳ 220" },
    { id: "ord-046", table: 11, items: "Fish & Chips x3, Cola x3", status: "completed", time: "12m ago", total: "৳ 750" },
    { id: "ord-045", table: 5, items: "Grilled Chicken x2", status: "completed", time: "18m ago", total: "৳ 560" },
    { id: "ord-044", table: 9, items: "Pasta Carbonara x1", status: "cooking", time: "22m ago", total: "৳ 280" },
    { id: "ord-043", table: 2, items: "BBQ Ribs x2, Coleslaw x1", status: "completed", time: "35m ago", total: "৳ 890" },
    { id: "ord-042", table: 6, items: "Beef Steak x1", status: "cancelled", time: "40m ago", total: "৳ 650" },
    { id: "ord-041", table: 1, items: "Chicken Wings x3, Fries x3", status: "completed", time: "52m ago", total: "৳ 420" },
];

export const MENU_ITEMS = [
    { id: "m-001", name: "Beef Burger", category: "Fast Food", price: "৳ 240", status: "active", image: "🍔" },
    { id: "m-002", name: "Chicken Biryani", category: "Bengali", price: "৳ 220", status: "active", image: "🍛" },
    { id: "m-003", name: "Fish & Chips", category: "Seafood", price: "৳ 250", status: "active", image: "🐟" },
    { id: "m-004", name: "BBQ Ribs", category: "BBQ", price: "৳ 450", status: "inactive", image: "🍖" },
    { id: "m-005", name: "Pasta Carbonara", category: "Italian", price: "৳ 280", status: "active", image: "🍝" },
    { id: "m-006", name: "Beef Steak", category: "BBQ", price: "৳ 650", status: "active", image: "🥩" },
    { id: "m-007", name: "Chicken Wings", category: "Fast Food", price: "৳ 320", status: "inactive", image: "🍗" },
    { id: "m-008", name: "Grilled Salmon", category: "Seafood", price: "৳ 580", status: "active", image: "🐠" },
];

export const MENU_CATEGORIES = ["all", "Fast Food", "Bengali", "Seafood", "BBQ", "Italian"];

export const ALL_COOKERS = [
    {
        id: "c-001", name: "Ziaul Hoque", initials: "ZH",
        specialty: "Bengali Cuisine", level: "Senior",
        status: "approved", joinedAt: "Jan 2025", orders: 142,
    },
    {
        id: "c-002", name: "Mahbub Rahman", initials: "MR",
        specialty: "Fast Food", level: "Mid-level",
        status: "approved", joinedAt: "Feb 2025", orders: 98,
    },
    {
        id: "c-003", name: "Sakib Khan", initials: "SK",
        specialty: "BBQ & Grill", level: "Junior",
        status: "pending", joinedAt: "Apr 2025", orders: 0,
    },
    {
        id: "c-004", name: "Rafiq Islam", initials: "RI",
        specialty: "Seafood", level: "Senior",
        status: "pending", joinedAt: "Apr 2025", orders: 0,
    },
    {
        id: "c-005", name: "Karim Uddin", initials: "KU",
        specialty: "Italian Cuisine", level: "Mid-level",
        status: "rejected", joinedAt: "Mar 2025", orders: 0,
    },
    {
        id: "c-006", name: "Nasir Ahmed", initials: "NA",
        specialty: "Fast Food", level: "Junior",
        status: "approved", joinedAt: "Dec 2024", orders: 214,
    },
];

export const ALL_TABLES = [
    { id: "t-01", number: 1, capacity: 2, status: "available" },
    { id: "t-02", number: 2, capacity: 4, status: "occupied" },
    { id: "t-03", number: 3, capacity: 4, status: "available" },
    { id: "t-04", number: 4, capacity: 6, status: "occupied" },
    { id: "t-05", number: 5, capacity: 2, status: "reserved" },
    { id: "t-06", number: 6, capacity: 8, status: "available" },
    { id: "t-07", number: 7, capacity: 4, status: "occupied" },
    { id: "t-08", number: 8, capacity: 4, status: "available" },
    { id: "t-09", number: 9, capacity: 6, status: "reserved" },
    { id: "t-10", number: 10, capacity: 2, status: "available" },
    { id: "t-11", number: 11, capacity: 8, status: "occupied" },
    { id: "t-12", number: 12, capacity: 4, status: "available" },
];

export const WEEKLY_REVENUE = [
    { day: "Mon", revenue: 12400, orders: 38 },
    { day: "Tue", revenue: 15800, orders: 47 },
    { day: "Wed", revenue: 11200, orders: 34 },
    { day: "Thu", revenue: 18900, orders: 56 },
    { day: "Fri", revenue: 22400, orders: 68 },
    { day: "Sat", revenue: 28600, orders: 84 },
    { day: "Sun", revenue: 19200, orders: 58 },
];

export const CATEGORY_SALES = [
    { category: "Fast Food", sold: 142, percent: 85 },
    { category: "Bengali", sold: 98, percent: 58 },
    { category: "Seafood", sold: 76, percent: 45 },
    { category: "BBQ", sold: 54, percent: 32 },
    { category: "Italian", sold: 38, percent: 23 },
];

export const MONTHLY_SUMMARY = [
    { label: "Total Revenue", value: "৳ 4,82,400", color: "text-[#38ada9]" },
    { label: "Total Orders", value: "1,248", color: "text-green-400" },
    { label: "Avg Daily", value: "৳ 16,080", color: "text-amber-400" },
    { label: "Best Day", value: "Saturday", color: "text-slate-100" },
];