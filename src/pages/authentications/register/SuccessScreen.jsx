import React from 'react'

function SuccessScreen({ onBackToLogin }) {
    return (
        <div
            className="flex flex-col items-center text-center py-6"
            style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
        >
            {/* Icon */}
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center text-4xl mb-4 shadow-xl shadow-[#079992]/30">
                🎉
                <span className="absolute inset-[-6px] rounded-[26px] border-2 border-[#38ada9]/40 animate-ping" />
            </div>

            <h2 className="text-xl font-bold text-slate-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Application Submitted!
            </h2>
            <p className="text-sm text-slate-400 mb-1 max-w-xs">Your application has been sent to the Admin.</p>
            <p className="text-[12px] text-slate-600 max-w-xs">You'll receive an email once approved.</p>

            {/* Next steps */}
            <div className="mt-6 w-full bg-slate-900 border border-[#38ada9]/15 rounded-2xl p-4 text-left space-y-3">
                {[
                    { icon: "✅", text: "Account created (pending approval)" },
                    { icon: "📨", text: "Admin has been notified" },
                    { icon: "⏳", text: "Awaiting admin approval" },
                    { icon: "🍳", text: "Start cooking once approved!" },
                ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-slate-400">
                        <span>{icon}</span>
                        <span>{text}</span>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={onBackToLogin}
                className="mt-6 w-full py-3 rounded-xl border border-[#38ada9]/30 text-[#38ada9] text-sm font-medium hover:bg-[#38ada9]/10 transition-colors"
            >
                ← Back to Login
            </button>
        </div>
    )
}

export default SuccessScreen