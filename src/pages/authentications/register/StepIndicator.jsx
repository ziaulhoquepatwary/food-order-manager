import React from 'react'

function StepIndicator({ current, total }) {
    return (
        <div className='flex items-center justify-center gap-2 mb-7'>
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${i < current ? "bg-gradient-to-br from-[#079992] to-[#38ada9] text-white shadow-md shadow-[#079992]/40" : i === current ? "bg-gradient-to-br from-[#079992] to-[#38ada9] text-white shadow-lg shadow-[#079992]/50 scale-110" : "bg-slate-700 text-slate-500"} `}
                    >
                        {i < current ? "✓" : i + 1}
                    </div>


                    {i < total - 1 && (
                        <div
                            className={`w-8 h-0.5 transition-all duration-500 ${i < current ? "bg-[#38ada9]" : "bg-slate-700"}`}
                        />
                    )}

                </div>
            ))}
        </div>
    )
}

export default StepIndicator