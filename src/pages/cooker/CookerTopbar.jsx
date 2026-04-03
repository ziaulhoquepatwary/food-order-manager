import CookerBrand from "./shared/CookerBrand";
import CookerLogoutBtn from "./shared/CookerLogoutBtn";
import CookerProfile from "./shared/CookerProfile";
import CookerStatusBadge from "./shared/CookerStatusBadge";


function CookerTopbar({ cookerName, onLogout }) {
    return (
        <header className="h-14 bg-slate-900 border-b border-[#38ada9]/15 px-5 flex items-center justify-between">

            <CookerBrand />

            <div className="flex items-center gap-4">
                <CookerStatusBadge />
                <div className="w-px h-5 bg-slate-700" />
                <CookerProfile name={cookerName} />
                <div className="w-px h-5 bg-slate-700" />
                <CookerLogoutBtn onLogout={onLogout} />
            </div>

        </header>
    );
}

export default CookerTopbar;