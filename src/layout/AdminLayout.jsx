import { Outlet } from "react-router-dom";
import AdminSidebar from "../pages/admin/AdminSidebar";
import AdminTopbar from "../pages/admin/AdminTopbar";

function AdminLayout() {
    return (
        <div className="flex h-screen bg-slate-800 overflow-hidden">

            <AdminSidebar />

            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <AdminTopbar />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}

export default AdminLayout;