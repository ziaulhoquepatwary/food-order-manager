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



                </div>
            </div>
        </div>
    )
}

export default OrderSummary