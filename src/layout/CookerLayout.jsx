import { Outlet, useNavigate } from "react-router-dom";
import CookerTopbar from "../pages/cooker/CookerTopbar";

function CookerLayout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-slate-800 flex flex-col">
            <CookerTopbar
                cookerName="Ziaul Hoque"
                onLogout={handleLogout}
            />
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}

export default CookerLayout;