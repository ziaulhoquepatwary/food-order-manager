function CookerBrand() {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center text-base shadow-lg shadow-[#079992]/30">
                🍽️
            </div>
            <div>
                <p className="font-semibold text-slate-100 leading-none">Cook Food</p>
                <p className="text-[12px] text-slate-500 tracking-widest uppercase mt-0.5">Kitchen</p>
            </div>
        </div>
    );
}

export default CookerBrand;