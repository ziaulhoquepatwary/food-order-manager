function CookerLogoutBtn({ onLogout }) {
    return (
        <button
            type="button"
            onClick={onLogout}
            className="px-3 py-1.5 rounded-xl border border-red-500/20 bg-red-500/8 text-red-400 font-medium hover:bg-red-500/15 hover:border-red-500/40 transition-all duration-200 cursor-pointer"
        >
            Logout
        </button>
    );
}

export default CookerLogoutBtn;