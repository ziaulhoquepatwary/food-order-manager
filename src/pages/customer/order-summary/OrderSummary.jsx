import React from 'react'

const items = [
    { id: 1, name: "Chicken Burger", variant: "With Extra Cheese", price: 320, qty: 2, img: "🍔", category: "Burgers", customizations: ["Extra Cheese", "No Onion", "Well Done"] },
    { id: 2, name: "Beef Pizza", variant: "Medium • Thin Crust", price: 580, qty: 1, img: "🍕", category: "Pizza", customizations: ["Extra Mozzarella", "Spicy Sauce"] },
    { id: 3, name: "Masala Chai", variant: "Hot • Large", price: 80, qty: 3, img: "🍵", category: "Beverages", customizations: ["Sugar Less", "Extra Ginger"] },
    { id: 4, name: "Chicken Fry", variant: "Full Piece", price: 280, qty: 1, img: "🍗", category: "Main Course", customizations: ["Extra Spicy", "Extra Crispy"] },
    { id: 5, name: "Mutton Biryani", variant: "Half Portion", price: 420, qty: 1, img: "🍛", category: "Rice & Biryani", customizations: ["Extra Raita", "Medium Spice"] },
    { id: 6, name: "Mango Lassi", variant: "Chilled • Large", price: 120, qty: 2, img: "🥭", category: "Beverages", customizations: ["Less Sweet", "Extra Ice"] },
    { id: 7, name: "Vegetable Soup", variant: "Hot Bowl", price: 150, qty: 1, img: "🍲", category: "Soups", customizations: ["No Salt", "Extra Pepper"] },
];

const fmt = (n) => "৳" + n.toLocaleString();
const subtotal = items.reduce((s, p) => s + p.price * p.qty, 0);
const tax = Math.floor(subtotal * 0.05);
const total = subtotal + tax;


function OrderSummary() {
    return (
        <div className="h-full bg-slate-950 text-slate-100 flex flex-col overflow-hidden">

            {/* ── Header ── */}
            <div className="flex-shrink-0 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-300 uppercase tracking-widest mb-0.5">Restaurant</p>
                        <h1 className="text-xl font-bold text-slate-100">Your Order</h1>
                    </div>
                    <span className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full">
                        {items.length} items
                    </span>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 overflow-hidden">
                <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row">

                    {/* LEFT — scrollable cart */}
                    <div
                        className="flex-1 overflow-y-auto px-4 py-5 border-b md:border-b-0 md:border-r border-slate-800 max-h-72 md:max-h-full"
                        style={{ scrollbarWidth: "none" }}
                    >
                        <p className="text-xs text-slate-300 uppercase tracking-widest mb-4">Cart Items</p>

                        <div className="space-y-3">
                            {items.map(item => (
                                <div key={item.id} className="bg-slate-900/50 border border-slate-800 hover:border-[#38ada9]/40 rounded-2xl px-4 py-3.5 transition-colors duration-200">
                                    <div className="flex items-start gap-3">

                                        {/* Icon */}
                                        <div className="flex flex-col items-center gap-1 flex-shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-[#079992]/10 border border-[#079992]/20 flex items-center justify-center text-2xl">
                                                {item.img}
                                            </div>
                                            <span className="text-xs text-slate-300">{item.category}</span>
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                                                    <p className="text-xs text-slate-300 mt-0.5">{item.variant}</p>
                                                </div>
                                                <span className="text-sm font-bold text-slate-100 flex-shrink-0">{fmt(item.price * item.qty)}</span>
                                            </div>

                                            {/* Customization tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {item.customizations.map((c, i) => (
                                                    <span key={i} className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                                                        + {c}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Unit price + qty */}
                                            <div className="flex items-center justify-between mt-3">
                                                <span className="text-xs text-slate-300">
                                                    {fmt(item.price)} <span className="text-slate-300">× {item.qty}</span>
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <button className="w-7 h-7 rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:border-[#079992] hover:text-[#38ada9] transition-colors flex items-center justify-center text-base leading-none">−</button>
                                                    <span className="w-5 text-center text-sm font-bold text-slate-100">{item.qty}</span>
                                                    <button className="w-7 h-7 rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:border-[#079992] hover:text-[#38ada9] transition-colors flex items-center justify-center text-base leading-none">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — fixed summary */}
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0 px-4 py-5 bg-slate-900/30">
                        <p className="text-xs text-slate-300 uppercase tracking-widest mb-5">Bill Summary</p>

                        <div className="space-y-3.5">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300">Subtotal</span>
                                <span className="text-slate-200 font-medium">{fmt(subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300">VAT / Tax (5%)</span>
                                <span className="text-slate-200 font-medium">{fmt(tax)}</span>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-[#079992]/40 via-[#38ada9]/20 to-transparent my-5" />

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-base font-bold text-slate-100">Total Payable</span>
                            <span className="text-2xl font-extrabold text-[#38ada9]">{fmt(total)}</span>
                        </div>

                        {/* Coupon */}
                        <div className="flex gap-2 mb-5">
                            <input
                                placeholder="Enter coupon code"
                                className="flex-1 px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-300 focus:outline-none focus:border-[#079992] transition-colors"
                            />
                            <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                                Apply
                            </button>
                        </div>

                        <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white text-sm font-bold tracking-wide hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                            Place Order →
                        </button>

                        <p className="text-center text-xs text-slate-300 mt-4">
                            🍽️ Estimated delivery: 25 – 35 mins
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderSummary