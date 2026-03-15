import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../pages/shared/Logo';

function AuthLayout() {
    return (
        <div className='min-h-screen bg-slate-900 flex items-center justify-center'>
            <div className='max-w-6xl w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'>

                {/* Left Side - Form */}
                <div className='w-full p-4 md:px-12 flex flex-col justify-between gap-5'>
                    <Logo />
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default AuthLayout