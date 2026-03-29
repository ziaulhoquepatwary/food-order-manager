import React from 'react'
import { TOTAL_STEPS, useRegisterForm } from '../../hooks/useRegisterForm';
import { Navigate } from 'react-router-dom';
import StepIndicator from './register/StepIndicator';
import Step1_BasicInfo from './register/Step1_BasicInfo';
import Step2_Professional from './register/Step2_Professional';
import Step3_Review from './register/Step3_Review';
import SuccessScreen from './register/SuccessScreen';

function Register() {
    const { methods, step, isSuccess, onNext, onBack, onSubmit, } = useRegisterForm();

    return (
        <form
            onSubmit={onSubmit}
            className="w-full min-h-screen bg-slate-900 flex items-center justify-center px-2 py-10 relative overflow-hidden"
        >

            {/* ── Background orbs ── */}
            <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#079992]/20 blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#38ada9]/10 blur-[80px] pointer-events-none animate-pulse" />

            {/* ── Dot grid ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(circle, #38ada9 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />

            {/* ── Card ── */}
            <div
                className="relative z-10 w-full max-w-md bg-slate-800 rounded-2xl border border-[#38ada9]/20 shadow-2xl shadow-black/50 px-5 py-10"
                style={{ animation: "fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
            >

                {/* ── Steam decoration ── */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                    {[0, 0.4, 0.8].map((delay, i) => (
                        <div key={i} className="w-1 h-5 rounded-full bg-gradient-to-t from-[#38ada9]/60 to-transparent"
                            style={{ animation: `floatSteam 2s ease-in-out ${delay}s infinite` }} />
                    ))}
                </div>

                {/* ── Logo ── */}
                {!isSuccess && (
                    <div className="flex flex-col items-center mb-6" style={{ animation: "fadeSlideUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}>
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#079992] to-[#38ada9] flex items-center justify-center text-2xl mb-3 shadow-lg shadow-[#079992]/30">
                            🍽️
                            <span className="absolute inset-[-5px] rounded-[22px] border-2 border-[#38ada9]/40 animate-ping" />
                        </div>
                        <h1 className="text-xl font-bold text-slate-100 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Join COOK FOOD
                        </h1>
                        <p className="text-xs text-slate-500 tracking-[3px] uppercase mt-0.5">Cooker Application</p>
                    </div>
                )}

                {/* ── Step Indicator ── */}
                {!isSuccess && <StepIndicator current={step} total={TOTAL_STEPS} />}

                {/* ── Step Content ── */}
                {step === 0 && <Step1_BasicInfo methods={methods} />}
                {step === 1 && <Step2_Professional methods={methods} />}
                {step === 2 && <Step3_Review methods={methods} />}
                {isSuccess && (
                    <SuccessScreen
                        onBackToLogin={() => {
                            Navigate("/login")
                            console.log("Navigate to login");
                        }}
                    />
                )}

                {/* ── Navigation Buttons ── */}
                {!isSuccess && (
                    <div className={`flex gap-3 mt-6 ${step > 0 ? "justify-between" : "justify-end"}`}>

                        {step > 0 && (
                            <button
                                type="button"
                                onClick={onBack}
                                className="px-5 py-2.5 rounded-xl border border-[#38ada9]/25 text-slate-400 text-sm font-medium hover:bg-slate-700 hover:text-slate-200 transition-all duration-200"
                            >
                                ← Back
                            </button>
                        )}

                        {/* Continue / Submit */}
                        {step < TOTAL_STEPS - 1 ? (
                            <button
                                type="button"
                                onClick={onNext}
                                className="flex-1 relative py-3 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white font-semibold text-sm tracking-wide overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#079992]/40"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                    style={{ animation: "shimmer 2.5s linear infinite", backgroundSize: "200% auto" }} />
                                <span className="relative">Continue →</span>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="flex-1 relative py-3 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white font-semibold text-sm tracking-wide overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#079992]/40"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                    style={{ animation: "shimmer 2.5s linear infinite", backgroundSize: "200% auto" }} />
                                <span className="relative">🚀 Submit Application</span>
                            </button>
                        )}

                    </div>
                )}

                {/* ── Footer ── */}
                {!isSuccess && (
                    <p className="text-center mt-5 text-[11px] text-slate-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#38ada9] hover:opacity-70 transition-opacity">Sign In</a>
                        &nbsp;·&nbsp; Cook Food © 2025
                    </p>
                )}

            </div>

            {/* ── Global Animations ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
                @keyframes fadeSlideUp {
                  from { opacity: 0; transform: translateY(28px); }
                  to   { opacity: 1; transform: translateY(0);    }
                }
                @keyframes floatSteam {
                  0%, 100% { transform: translateY(0) scaleX(1);       opacity: 0.6;  }
                  50%       { transform: translateY(-10px) scaleX(1.2); opacity: 0.15; }
                }
                @keyframes shimmer {
                  0%   { background-position: -200% center; }
                  100% { background-position:  200% center; }
                }
              `}</style>

        </form>
    )
}

export default Register