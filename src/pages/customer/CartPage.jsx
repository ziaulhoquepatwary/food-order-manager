import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CartPage({ language = "en" }) {
    const navigate = useNavigate();

    // Dummy cart data for design
    const [cartItems] = useState([
        {
            id: "food_001",
            name: { en: "Chicken Alfredo Pasta", bn: "চিকেন আলফ্রেডো পাস্তা" },
            description: { en: "Creamy pasta with grilled chicken", bn: "গ্রিল করা চিকেন দিয়ে তৈরি ক্রিমি পাস্তা" },
            price: 420,
            discountPrice: 380,
            images: ["/images/foods/pasta1.jpg"],
            quantity: 2,
            selectedOptions: { size: "Large", taste: "Spicy" },
            optionPrice: 80,
            tastePrice: 15
        },
        {
            id: "food_002",
            name: { en: "Beef Steak", bn: "বিফ স্টেক" },
            description: { en: "Juicy grilled beef steak", bn: "রসালো গ্রিল করা বিফ স্টেক" },
            price: 850,
            images: ["/images/foods/steak.jpg"],
            quantity: 1,
            selectedOptions: { taste: "Mild" },
            optionPrice: 0,
            tastePrice: 0
        },
        {
            id: "food_003",
            name: { en: "Margherita Pizza", bn: "মার্গারিটা পিজা" },
            description: { en: "Classic Italian pizza", bn: "ক্লাসিক ইতালিয়ান পিজা" },
            price: 650,
            discountPrice: 580,
            images: ["/images/foods/pizza.jpg"],
            quantity: 1,
            selectedOptions: { size: "Large", taste: "Tasty" },
            optionPrice: 100,
            tastePrice: 0
        },
        {
            id: "food_004",
            name: { en: "Burger Deluxe", bn: "বার্গার ডিলাক্স" },
            description: { en: "Double patty burger with cheese", bn: "ডাবল প্যাটি বার্গার পনির সহ" },
            price: 450,
            discountPrice: 400,
            images: ["/images/foods/burger.jpg"],
            quantity: 3,
            selectedOptions: { size: "Large", taste: "Spicy" },
            optionPrice: 50,
            tastePrice: 15
        },
        {
            id: "food_005",
            name: { en: "Caesar Salad", bn: "সিজার সালাদ" },
            description: { en: "Fresh caesar salad with chicken", bn: "তাজা সিজার সালাদ চিকেন সহ" },
            price: 320,
            images: ["/images/foods/salad.jpg"],
            quantity: 1,
            selectedOptions: { taste: "Mild" },
            optionPrice: 0,
            tastePrice: 0
        },
    ]);

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => {
        const itemPrice = item.discountPrice || item.price;
        return total + ((itemPrice + item.optionPrice + item.tastePrice) * item.quantity);
    }, 0);

    const deliveryFee = 60;
    const discount = 50;
    const totalAmount = subtotal + deliveryFee - discount;

    return (
        <div className="h-full bg-slate-800 flex flex-col overflow-y-auto">
            {/* Header - Sticky */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-slate-900 to-slate-800 px-4 md:px-6 lg:px-8 py-4 border-b border-slate-700">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <span className="text-white text-xl">←</span>
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">Shopping Cart</h1>
                            <p className="text-xs text-gray-400">{cartItems.length} items</p>
                        </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors">
                        Clear Cart
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Side - Cart Items (Scrollable on mobile, auto on desktop) */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-900 rounded-xl border border-slate-700 p-4 hover:border-slate-600 transition-all duration-300"
                                >
                                    <div className="flex gap-4">
                                        {/* Product Image */}
                                        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                                            {item.images?.[0] ? (
                                                <img
                                                    src={item.images[0]}
                                                    alt={item.name[language]}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-4xl">
                                                    🍽️
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-white font-semibold text-base mb-1 truncate">
                                                        {item.name[language]}
                                                    </h3>
                                                    <p className="text-gray-400 text-xs line-clamp-1">
                                                        {item.description[language]}
                                                    </p>
                                                </div>
                                                <button className="text-red-400 hover:text-red-300 transition-colors flex-shrink-0">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Selected Options */}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {Object.entries(item.selectedOptions).map(([key, value]) => (
                                                    <span
                                                        key={key}
                                                        className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded-md border border-slate-700"
                                                    >
                                                        {key}: {value}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Price & Quantity */}
                                            <div className="flex items-center justify-between">
                                                {/* Price */}
                                                <div className="flex items-center gap-2">
                                                    {item.discountPrice ? (
                                                        <>
                                                            <span className="text-[#079992] font-bold text-lg">
                                                                ৳{item.discountPrice + item.optionPrice + item.tastePrice}
                                                            </span>
                                                            <span className="text-gray-500 text-sm line-through">
                                                                ৳{item.price + item.optionPrice + item.tastePrice}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className="text-[#079992] font-bold text-lg">
                                                            ৳{item.price + item.optionPrice + item.tastePrice}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-2">
                                                    <button className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                                                        −
                                                    </button>
                                                    <span className="text-white font-semibold w-8 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button className="w-8 h-8 bg-gradient-to-r from-[#079992] to-[#38ada9] hover:shadow-lg hover:shadow-[#60a3bc]/50 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Item Total */}
                                            <div className="mt-3 pt-3 border-t border-slate-700">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-400 text-sm">Item Total:</span>
                                                    <span className="text-white font-bold">
                                                        ৳{((item.discountPrice || item.price) + item.optionPrice + item.tastePrice) * item.quantity}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Empty State (Show when no items) */}
                            {cartItems.length === 0 && (
                                <div className="flex flex-col items-center justify-center text-center py-12">
                                    <div className="text-8xl mb-4">🛒</div>
                                    <h3 className="text-white text-xl font-semibold mb-2">Your cart is empty</h3>
                                    <p className="text-gray-400 text-sm mb-6">Add some delicious items to get started!</p>
                                    <button
                                        onClick={() => navigate("/")}
                                        className="bg-gradient-to-r from-[#079992] to-[#38ada9] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#60a3bc]/50 transition-all duration-300"
                                    >
                                        Browse Menu
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Right Side - Order Summary (Sticky) */}
                        <div className="lg:col-span-1">
                            <div className="lg:sticky lg:top-24 space-y-4">
                                {/* Order Summary Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-slate-900 rounded-xl border border-slate-700 p-6 space-y-4"
                                >
                                    <h2 className="text-white font-bold text-lg flex items-center gap-2">
                                        <span className="text-xl">📋</span>
                                        Order Summary
                                    </h2>

                                    {/* Price Breakdown */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Subtotal ({cartItems.length} items)</span>
                                            <span className="text-white font-semibold">৳{subtotal}</span>
                                        </div>

                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-400">Delivery Fee</span>
                                            <span className="text-white font-semibold">৳{deliveryFee}</span>
                                        </div>

                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-green-400">Discount</span>
                                            <span className="text-green-400 font-semibold">-৳{discount}</span>
                                        </div>

                                        <div className="border-t border-slate-700 pt-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-semibold">Total Amount</span>
                                                <span className="text-[#079992] font-bold text-2xl">৳{totalAmount}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Promo Code */}
                                    <div className="pt-3 border-t border-slate-700">
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Enter promo code"
                                                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#079992] transition-colors"
                                            />
                                            <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                    {/* Checkout Button */}
                                    <button className="w-full bg-gradient-to-r from-[#079992] to-[#38ada9] hover:shadow-lg hover:shadow-[#60a3bc]/50 text-white py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                        <span className="text-xl">🛍️</span>
                                        Proceed to Checkout
                                    </button>
                                </motion.div>

                                {/* Delivery Info Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-slate-900 rounded-xl border border-slate-700 p-5 space-y-3"
                                >
                                    <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                                        <span className="text-lg">🚚</span>
                                        Delivery Information
                                    </h3>
                                    <div className="space-y-2 text-xs text-gray-400">
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-400 mt-0.5">✓</span>
                                            <span>Free delivery on orders above ৳500</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-400 mt-0.5">✓</span>
                                            <span>Estimated delivery: 30-45 minutes</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-400 mt-0.5">✓</span>
                                            <span>Safe and contactless delivery</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Payment Methods */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-slate-900 rounded-xl border border-slate-700 p-5"
                                >
                                    <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                                        <span className="text-lg">💳</span>
                                        We Accept
                                    </h3>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-xs text-gray-300">
                                            Cash
                                        </div>
                                        <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-xs text-gray-300">
                                            bKash
                                        </div>
                                        <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-xs text-gray-300">
                                            Nagad
                                        </div>
                                        <div className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-xs text-gray-300">
                                            Card
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;