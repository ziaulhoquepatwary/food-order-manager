function AddMenuItemBtn({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#079992]/30 transition-all duration-200"
        >
            <span className="text-lg leading-none">+</span>
            <span>Add Item</span>
        </button>
    );
}

export default AddMenuItemBtn;