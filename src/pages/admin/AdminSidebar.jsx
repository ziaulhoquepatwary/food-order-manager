import { useNavigate } from "react-router-dom";
import SidebarNavList from "./SidebarNavList";
import AdminSidebarFooter from "./AdminSidebarFooter";
import SidebarLogo from "./shared/SidebarLogo";

function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <aside className="
            h-screen flex flex-col
            bg-slate-900 border-r border-[#38ada9]/15
            w-16 md:w-60
            transition-all duration-300
        ">
            <SidebarLogo />
            <SidebarNavList />
            <AdminSidebarFooter onLogout={handleLogout} />
        </aside>
    );
}

export default AdminSidebar;