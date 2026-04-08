import SidebarNavItem from "./SidebarNavItem";

const NAV_ITEMS = [
    {
        section: "Main",
        links: [
            { to: "/admin", icon: "🏠", label: "Overview" },
            { to: "/admin/orders", icon: "📋", label: "Orders", badge: 6 },
            { to: "/admin/menu", icon: "🍽️", label: "Menu" },
        ]
    },
    {
        section: "Manage",
        links: [
            { to: "/admin/cookers", icon: "👨‍🍳", label: "Cookers", badge: 3 },
            { to: "/admin/tables", icon: "🪑", label: "Tables" },
            { to: "/admin/analytics", icon: "📊", label: "Analytics" },
        ]
    },
    {
        section: "System",
        links: [
            { to: "/admin/settings", icon: "⚙️", label: "Settings" },
        ]
    },
];

function SidebarNavList() {
    return (
        <nav className="flex-1 px-3 py-4 flex flex-col gap-5 overflow-y-auto">
            {NAV_ITEMS.map(({ section, links }) => (
                <div key={section}>

                    {/* section label — mobile label hide */}
                    <p className="hidden md:block text-[10px] text-slate-200 uppercase tracking-widest px-3 mb-2">
                        {section}
                    </p>

                    <div className="flex flex-col gap-1">
                        {links.map(link => (
                            <SidebarNavItem key={link.to} {...link} />
                        ))}
                    </div>

                </div>
            ))}
        </nav>
    );
}

export default SidebarNavList;