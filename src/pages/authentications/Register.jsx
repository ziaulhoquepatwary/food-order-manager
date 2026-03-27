import React from 'react'

function Register() {

    return (
        <section className="w-full min-h-screen bg-slate-900 flex items-center justify-center px-2 py-10 relative overflow-hidden">

            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#079992]/20 blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#38ada9]/10 blur-[80px] pointer-events-none animate-pulse" />

            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle, #38ada9 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 w-full max-w-md bg-slate-800 rounded-2xl border border-[#38ada9]/20 shadow-2xl shadow-black/50 px-5 py-10"
                style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) both" }}>

                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                    {[0, 0.4, 0.8].map((delay, i) => (
                        <div
                            key={i}
                            className="w-1 h-5 rounded-full bg-gradient-to-t from-[#38ada9]/60 to-transparent"
                            style={{ animation: `floatSteam 2s ease-in-out ${delay}s infinite` }}
                        />
                    ))}
                </div>


            </div>

        </section>
    )
}

export default Register