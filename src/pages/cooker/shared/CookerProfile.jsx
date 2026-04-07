function CookerProfile({ name = "Ziaul Hoque" }) {
    const initials = name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center font-semibold text-white shadow-md shadow-[#079992]/30">
                {initials}
            </div>
            <div>
                <p className="font-medium text-slate-200 leading-none">{name}</p>
                <p className="text-[12px] text-slate-500 mt-0.5">Cooker</p>
            </div>
        </div>
    );
}

export default CookerProfile;