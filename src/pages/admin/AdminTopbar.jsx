import { useLocation } from "react-router-dom";

const PAGE_TITLES = {
    "/admin": { title: "Overview", sub: "Welcome back, Admin" },
    "/admin/orders": { title: "Orders", sub: "Manage all orders" },
    "/admin/menu": { title: "Menu", sub: "Manage your menu items" },
    "/admin/cookers": { title: "Cookers", sub: "Manage cooker applications" },
    "/admin/tables": { title: "Tables", sub: "Manage restaurant tables" },
    "/admin/analytics": { title: "Analytics", sub: "Sales & performance data" },
    "/admin/settings": { title: "Settings", sub: "System configuration" },
};

function AdminTopbar() {
    const { pathname } = useLocation();
    const page = PAGE_TITLES[pathname] ?? { title: "Admin", sub: "" };

    const today = new Date().toLocaleDateString("en-GB", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    return (
        <header className="h-16 bg-slate-900 border-b border-[#38ada9]/15 px-5 flex items-center justify-between shrink-0">

            {/* Left — Page Title */}
            <div>
                <h1 className="text-lg font-semibold text-slate-100 leading-none">
                    {page.title}
                </h1>
                <p className="text-sm text-slate-200 mt-1">
                    {page.sub}
                </p>
            </div>

            {/* Right — Date + Notification */}
            <div className="flex items-center gap-3">

                {/* date- hide mobile */}
                <span className="hidden md:block text-sm text-slate-200 px-3 py-1.5 rounded-xl border border-[#38ada9]/15">
                    {today}
                </span>

                {/* Notification button */}
                <button
                    type="button"
                    className="relative w-10 h-10 rounded-xl border border-[#38ada9]/20 bg-slate-800 flex items-center justify-center text-base hover:border-[#38ada9]/40 hover:bg-slate-700 transition-all duration-200"
                >
                    🔔
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-400" />
                </button>

            </div>

        </header>
    );
}

export default AdminTopbar;