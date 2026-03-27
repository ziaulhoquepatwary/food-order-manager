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

        </section>
    )
}

export default Register