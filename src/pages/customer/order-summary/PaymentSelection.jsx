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


                </div>
            </div>
        </div>
    );
}

export default PaymentPage;