import Logo from "../shared/Logo";
import CookerLogoutBtn from "./shared/CookerLogoutBtn";
import CookerProfile from "./shared/CookerProfile";
import CookerStatusBadge from "./shared/CookerStatusBadge";


function CookerTopbar({ cookerName, onLogout }) {
    return (
        <header className="bg-slate-900 border-b border-[#38ada9]/15 px-5 flex items-center justify-between py-3">

            <div className="text-center">
                <Logo />
                <p className="text-[12px] text-slate-300 tracking-widest uppercase mt-0.5">Kitchen</p>
            </div>

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