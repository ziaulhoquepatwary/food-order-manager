import React, { useState } from 'react';

const paymentMethods = [
    { id: 'bkash', name: 'bKash', icon: '৳', color: 'bg-[#D12053]', description: 'Mobile Wallet' },
    { id: 'nagad', name: 'Nagad', icon: '৳', color: 'bg-[#F7941D]', description: 'Mobile Wallet' },
    { id: 'card', name: 'Card', icon: '💳', color: 'bg-[#1e272e]', description: 'Debit/Credit Card' },
];

const fmt = (n) => "৳" + n.toLocaleString();

function PaymentPage({ totalAmount = 1950 }) {
    const [selectedMethod, setSelectedMethod] = useState('bkash');

    return (
        <div className="h-screen bg-slate-950 text-slate-100 flex flex-col overflow-hidden">

            {/* ── Header ── */}
            <div className="flex-shrink-0 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-0.5">Secure Checkout</p>
                        <h1 className="text-xl font-bold text-slate-100">Select Payment Method</h1>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-400">Payable Amount</p>
                        <p className="text-xl font-black text-[#38ada9]">{fmt(totalAmount)}</p>
                    </div>
                </div>
            </div>

            {/* ── Body ── */}
            <div
                className="flex-1 overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row">
                    {/* LEFT — Payment Methods Selection */}
                    <div className="flex-1 p-6 md:border-r border-slate-800">
                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-6">Gateways</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedMethod(method.id)}
                                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedMethod === method.id
                                        ? 'border-[#38ada9] bg-[#38ada9]/5'
                                        : 'border-slate-800 bg-slate-900/30 hover:border-slate-700'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
                                        {method.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-100">{method.name}</h3>
                                        <p className="text-xs text-slate-400">{method.description}</p>
                                    </div>
                                    {selectedMethod === method.id && (
                                        <div className="w-2 h-2 rounded-full bg-[#38ada9] animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Input Details & Summary */}
                    <div className="w-full md:w-[400px] lg:w-[450px] p-6 bg-slate-900/20 flex flex-col">
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-6">Payment Details</p>

                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-5">
                                <div>
                                    <label className="block text-[11px] text-slate-400 uppercase mb-2 ml-1">
                                        {selectedMethod === 'card' ? 'Card Number' : `${selectedMethod} Number`}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={selectedMethod === 'card' ? "xxxx xxxx xxxx xxxx" : "01XXXXXXXXX"}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#38ada9] transition-all placeholder:text-slate-600"
                                    />
                                </div>

                                {selectedMethod === 'card' ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[11px] text-slate-400 uppercase mb-2 ml-1">Expiry</label>
                                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#38ada9]" />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] text-slate-400 uppercase mb-2 ml-1">CVV</label>
                                            <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#38ada9]" />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-[11px] text-slate-400 uppercase mb-2 ml-1">Transaction PIN</label>
                                        <input
                                            type="password"
                                            placeholder="••••"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#38ada9] tracking-[0.5em]"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="mt-6 px-2">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Platform Fee</span>
                                    <span className="text-slate-100">৳0.00</span>
                                </div>
                                <div className="flex justify-between text-base font-bold">
                                    <span className="text-slate-100">Total</span>
                                    <span className="text-[#38ada9]">{fmt(totalAmount)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white font-bold tracking-wide hover:opacity-95 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200">
                                Complete Payment
                            </button>
                            <button className="w-full py-3 bg-white/10 rounded-2xl text-slate-500 text-xs font-medium hover:text-slate-300 transition-colors uppercase tracking-widest">
                                Cancel & Go Back
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PaymentPage;